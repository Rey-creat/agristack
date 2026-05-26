/* ============================================================================
   CHECKOUT FLOW JAVASCRIPT
   ============================================================================ */

class CheckoutFlow {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.cartItems = [];
        this.checkoutData = {
            shipping: {},
            payment: {},
            address: {},
            promo: null
        };
        this.init();
    }

    init() {
        this.loadCartItems();
        this.updateProgressIndicator();
        this.attachEventListeners();
    }

    loadCartItems() {
        // Simulate loading from localStorage/session
        this.cartItems = [
            {
                id: 1,
                name: 'Compact Utility Tractor 3025E',
                brand: 'John Deere',
                price: 18400,
                quantity: 1,
                image: 'images/CUTractor.png'
            },
            {
                id: 2,
                name: 'Front Loader JD-200',
                brand: 'John Deere',
                price: 2500,
                quantity: 1,
                image: 'images/loader-bucket.jpg'
            }
        ];
    }

    attachEventListeners() {
        // Navigation buttons
        const proceedBtn = document.querySelector('.btn-proceed');
        const backBtn = document.querySelector('.btn-back');

        if (proceedBtn) {
            proceedBtn.addEventListener('click', () => this.proceedToNextStep());
        }
        if (backBtn) {
            backBtn.addEventListener('click', () => this.goToPreviousStep());
        }

        // Step-specific listeners
        this.attachStepListeners();
    }

    attachStepListeners() {
        if (this.currentStep === 1) {
            this.attachCartListeners();
        } else if (this.currentStep === 2) {
            this.attachShippingListeners();
        } else if (this.currentStep === 3) {
            this.attachPaymentListeners();
        }
    }

    attachCartListeners() {
        // Remove item buttons
        document.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.cart-item').dataset.itemId);
                this.removeCartItem(itemId);
            });
        });

        // Update quantity
        document.querySelectorAll('.item-qty-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const itemId = parseInt(e.target.closest('.cart-item').dataset.itemId);
                const quantity = parseInt(e.target.value);
                this.updateCartItemQuantity(itemId, quantity);
            });
        });

        // Promo code
        const promoBtn = document.querySelector('.promo-button');
        if (promoBtn) {
            promoBtn.addEventListener('click', () => this.applyPromoCode());
        }
    }

    attachShippingListeners() {
        // Address selection
        document.querySelectorAll('.address-card').forEach(card => {
            card.addEventListener('click', () => this.selectAddress(card));
        });

        // Shipping method selection
        document.querySelectorAll('.shipping-option input').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.selectShippingMethod(e.target.value);
                this.updateSummary();
            });
        });

        // Add new address
        const addBtn = document.querySelector('.add-address-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.openAddressForm());
        }
    }

    attachPaymentListeners() {
        // Payment method selection
        document.querySelectorAll('.payment-method input').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.selectPaymentMethod(e.target.value);
                this.toggleCardForm();
            });
        });

        // Card form validation
        const cardNumberInput = document.querySelector('.card-number-input');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', (e) => {
                e.target.value = this.formatCardNumber(e.target.value);
            });
        }

        const expiryInput = document.querySelector('.card-expiry-input');
        if (expiryInput) {
            expiryInput.addEventListener('input', (e) => {
                e.target.value = this.formatExpiry(e.target.value);
            });
        }

        const cvvInput = document.querySelector('.card-cvv-input');
        if (cvvInput) {
            cvvInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
            });
        }
    }

    updateProgressIndicator() {
        const steps = document.querySelectorAll('.progress-step');
        steps.forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');

            if (stepNum < this.currentStep) {
                step.classList.add('completed');
            } else if (stepNum === this.currentStep) {
                step.classList.add('active');
            }
        });
    }

    proceedToNextStep() {
        // Validate current step
        if (!this.validateCurrentStep()) {
            showToast('❌ Please fill in all required fields');
            return;
        }

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateProgressIndicator();
            this.renderStep();
        } else if (this.currentStep === this.totalSteps) {
            // Process order
            this.processOrder();
        }
    }

    goToPreviousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateProgressIndicator();
            this.renderStep();
        }
    }

    validateCurrentStep() {
        if (this.currentStep === 1) {
            return this.cartItems.length > 0;
        } else if (this.currentStep === 2) {
            return this.checkoutData.address && this.checkoutData.shipping;
        } else if (this.currentStep === 3) {
            return this.checkoutData.payment && this.validatePaymentForm();
        }
        return true;
    }

    validatePaymentForm() {
        const cardNumber = document.querySelector('.card-number-input');
        const expiry = document.querySelector('.card-expiry-input');
        const cvv = document.querySelector('.card-cvv-input');

        if (!cardNumber || !expiry || !cvv) return true;

        return (
            cardNumber.value.replace(/\s/g, '').length === 16 &&
            expiry.value.length === 5 &&
            cvv.value.length === 3
        );
    }

    removeCartItem(itemId) {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        if (this.cartItems.length === 0) {
            showToast('Cart is empty! Redirecting...');
            setTimeout(() => window.location.href = 'index.html', 1500);
        }
        this.updateSummary();
    }

    updateCartItemQuantity(itemId, quantity) {
        const item = this.cartItems.find(i => i.id === itemId);
        if (item) {
            if (quantity > 0) {
                item.quantity = quantity;
            } else {
                this.removeCartItem(itemId);
            }
            this.updateSummary();
        }
    }

    selectAddress(card) {
        document.querySelectorAll('.address-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.checkoutData.address = card.dataset.addressId;
    }

    selectShippingMethod(method) {
        this.checkoutData.shipping = method;
    }

    selectPaymentMethod(method) {
        this.checkoutData.payment = method;
    }

    toggleCardForm() {
        const cardForm = document.querySelector('.card-form');
        const isCard = this.checkoutData.payment === 'card';
        
        if (cardForm) {
            cardForm.classList.toggle('active', isCard);
        }
    }

    openAddressForm() {
        // TODO: Show modal for adding new address
        showToast('📍 Add address form coming soon!');
    }

    applyPromoCode() {
        const input = document.querySelector('.promo-input');
        const code = input.value.toUpperCase();

        // Simulate promo code validation
        const validCodes = {
            'FARM2024': 0.1,  // 10% off
            'SUMMER20': 0.20, // 20% off
            'WELCOME5': 0.05  // 5% off
        };

        if (validCodes[code]) {
            this.checkoutData.promo = {
                code: code,
                discount: validCodes[code]
            };
            showToast(`✓ Promo code "${code}" applied!`);
            input.disabled = true;
            this.updateSummary();
        } else {
            showToast('❌ Invalid promo code');
            input.focus();
        }
    }

    formatCardNumber(value) {
        const cleaned = value.replace(/\s/g, '').slice(0, 16);
        return cleaned.replace(/(\d{4})/g, '$1 ').trim();
    }

    formatExpiry(value) {
        const cleaned = value.replace(/\D/g, '').slice(0, 4);
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
        }
        return cleaned;
    }

    calculateTotals() {
        let subtotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let shipping = this.getShippingCost();
        let tax = subtotal * 0.08; // 8% tax
        let discount = 0;

        if (this.checkoutData.promo) {
            discount = subtotal * this.checkoutData.promo.discount;
        }

        let total = subtotal + shipping + tax - discount;

        return {
            subtotal: subtotal,
            shipping: shipping,
            tax: tax,
            discount: discount,
            total: total
        };
    }

    getShippingCost() {
        const shippingMethods = {
            'standard': 50,
            'express': 150,
            'overnight': 300,
            'pickup': 0
        };
        return shippingMethods[this.checkoutData.shipping] || 0;
    }

    updateSummary() {
        const totals = this.calculateTotals();
        const summaryItems = document.querySelector('.summary-items');
        const summaryTotals = document.querySelector('.summary-totals');

        if (summaryItems) {
            summaryItems.innerHTML = this.cartItems.map(item => `
                <div class="summary-item">
                    <span class="summary-item-name">${item.quantity}x ${item.name.substring(0, 30)}</span>
                    <span class="summary-item-price">$${this.formatPrice(item.price * item.quantity)}</span>
                </div>
            `).join('');
        }

        if (summaryTotals) {
            summaryTotals.innerHTML = `
                <div class="summary-row">
                    <span class="summary-row-label">Subtotal</span>
                    <span class="summary-row-value">$${this.formatPrice(totals.subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-row-label">Shipping</span>
                    <span class="summary-row-value">$${this.formatPrice(totals.shipping)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-row-label">Tax</span>
                    <span class="summary-row-value">$${this.formatPrice(totals.tax)}</span>
                </div>
                ${this.checkoutData.promo ? `
                <div class="summary-row promo">
                    <span class="summary-row-label">Discount (${this.checkoutData.promo.code})</span>
                    <span class="summary-row-value">-$${this.formatPrice(totals.discount)}</span>
                </div>
                ` : ''}
                <div class="summary-row total">
                    <span class="summary-row-label">Total</span>
                    <span class="summary-row-value">$${this.formatPrice(totals.total)}</span>
                </div>
            `;
        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-US').format(Math.round(price * 100) / 100);
    }

    renderStep() {
        window.scrollTo(0, 0);
        document.querySelector('.checkout-main').style.opacity = '0.7';
        
        setTimeout(() => {
            // In real app, would load step content via AJAX
            document.querySelector('.checkout-main').style.opacity = '1';
            this.attachStepListeners();
        }, 300);
    }

    processOrder() {
        // Validate final data
        const totals = this.calculateTotals();
        
        // Create order object
        const order = {
            id: 'ORD-' + Date.now(),
            items: this.cartItems,
            address: this.checkoutData.address,
            shipping: this.checkoutData.shipping,
            payment: this.checkoutData.payment,
            subtotal: totals.subtotal,
            shipping: totals.shipping,
            tax: totals.tax,
            discount: totals.discount,
            total: totals.total,
            timestamp: new Date().toISOString(),
            status: 'confirmed'
        };

        // Save to localStorage (demo)
        localStorage.setItem('lastOrder', JSON.stringify(order));

        // Redirect to confirmation
        window.location.href = 'checkout-confirmation.html?orderId=' + order.id;
    }
}

// Initialize checkout on page load
document.addEventListener('DOMContentLoaded', () => {
    const checkout = new CheckoutFlow();
    checkout.updateSummary();
});

// Toast notification helper
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message show';
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container') || document.body;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
