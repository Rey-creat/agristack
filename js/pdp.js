/* ============================================================================
   PRODUCT DETAIL PAGE (PDP) JAVASCRIPT
   ============================================================================ */

class ProductDetailPage {
    constructor() {
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
    }

    cacheElements() {
        this.mainImage = document.getElementById('main-image');
        this.thumbnails = document.querySelectorAll('.thumbnail');
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.quantityInput = document.getElementById('quantity');
        this.qtyMinusBtn = document.querySelector('.qty-btn.minus');
        this.qtyPlusBtn = document.querySelector('.qty-btn.plus');
        this.addToCartBtn = document.querySelector('.btn-add-to-cart');
        this.addToWishlistBtn = document.querySelector('.btn-wishlist-pdp');
        this.btnRfq = document.querySelector('.btn-rfq');
        this.btnFinancing = document.querySelector('.btn-financing');
        this.btnFullscreen = document.querySelector('.btn-fullscreen');
    }

    attachEventListeners() {
        // Image gallery
        this.thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => this.switchImage(index, thumb));
        });

        // Quantity controls
        if (this.qtyMinusBtn) {
            this.qtyMinusBtn.addEventListener('click', () => this.decrementQuantity());
        }
        if (this.qtyPlusBtn) {
            this.qtyPlusBtn.addEventListener('click', () => this.incrementQuantity());
        }

        // Quantity input direct change
        if (this.quantityInput) {
            this.quantityInput.addEventListener('change', (e) => this.validateQuantity(e));
        }

        // Tab switching
        this.tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e));
        });

        // Action buttons
        if (this.addToCartBtn) {
            this.addToCartBtn.addEventListener('click', () => this.addToCart());
        }
        if (this.addToWishlistBtn) {
            this.addToWishlistBtn.addEventListener('click', () => this.toggleWishlist());
        }
        if (this.btnRfq) {
            this.btnRfq.addEventListener('click', () => this.openRfqModal());
        }
        if (this.btnFinancing) {
            this.btnFinancing.addEventListener('click', () => this.openFinancingCalculator());
        }
        if (this.btnFullscreen) {
            this.btnFullscreen.addEventListener('click', () => this.openImageViewer());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Image zoom on hover (desktop)
        if (window.innerWidth > 768) {
            this.mainImage.addEventListener('mousemove', (e) => this.handleImageZoom(e));
            this.mainImage.addEventListener('mouseleave', () => this.resetImageZoom());
        }
    }

    switchImage(index, thumbnail) {
        this.currentImageIndex = index;
        const fullImageSrc = thumbnail.dataset.full;
        
        // Update main image with fade effect
        this.mainImage.style.opacity = '0.7';
        this.mainImage.src = fullImageSrc;
        this.mainImage.style.opacity = '1';

        // Update active thumbnail
        this.thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    }

    incrementQuantity() {
        const currentValue = parseInt(this.quantityInput.value);
        const maxValue = parseInt(this.quantityInput.max);
        
        if (currentValue < maxValue) {
            this.quantityInput.value = currentValue + 1;
        }
    }

    decrementQuantity() {
        const currentValue = parseInt(this.quantityInput.value);
        const minValue = parseInt(this.quantityInput.min);
        
        if (currentValue > minValue) {
            this.quantityInput.value = currentValue - 1;
        }
    }

    validateQuantity(e) {
        let value = parseInt(e.target.value);
        const min = parseInt(e.target.min);
        const max = parseInt(e.target.max);

        if (isNaN(value) || value < min) {
            e.target.value = min;
        } else if (value > max) {
            e.target.value = max;
        }
    }

    switchTab(e) {
        const targetTab = e.currentTarget.dataset.tab;

        // Remove active class from all buttons and contents
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        e.currentTarget.classList.add('active');

        // Show corresponding content
        const activeContent = document.getElementById(targetTab);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Scroll to tabs
        document.querySelector('.product-tabs').scrollIntoView({ behavior: 'smooth' });
    }

    addToCart() {
        const quantity = parseInt(this.quantityInput.value);
        const productName = document.querySelector('.product-header h1').textContent;
        const price = document.querySelector('.price-section-pdp .price').textContent;

        // Simulate adding to cart
        console.log(`Added ${quantity} x ${productName} to cart`);

        // Show success toast
        showToast(`✓ ${quantity} × ${productName.trim()} added to cart!`);

        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = parseInt(cartCount.textContent || 0) + quantity;
        }

        // Reset quantity
        this.quantityInput.value = 1;
    }

    toggleWishlist() {
        this.addToWishlistBtn.classList.toggle('active');
        const productName = document.querySelector('.product-header h1').textContent;
        
        if (this.addToWishlistBtn.classList.contains('active')) {
            const icon = this.addToWishlistBtn.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast(`♥ ${productName.trim()} added to Wishlist!`);
        } else {
            const icon = this.addToWishlistBtn.querySelector('i');
            icon.classList.remove('fas');
            icon.classList.add('far');
            showToast(`${productName.trim()} removed from Wishlist`);
        }
    }

    openRfqModal() {
        // TODO: Implement RFQ modal (for Phase 5)
        showToast('📝 Request for Quote feature coming soon!');
        console.log('Open RFQ Modal');
    }

    openFinancingCalculator() {
        // TODO: Implement Financing Calculator (for Phase 6)
        showToast('💰 Financing Calculator coming soon!');
        console.log('Open Financing Calculator');
    }

    openImageViewer() {
        // TODO: Implement fullscreen image viewer
        showToast('🔍 Fullscreen viewer coming soon!');
        console.log('Open Fullscreen Image Viewer');
    }

    handleImageZoom(e) {
        const rect = this.mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        this.mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        this.mainImage.style.transform = 'scale(1.2)';
        this.mainImage.style.cursor = 'zoom-out';
    }

    resetImageZoom() {
        this.mainImage.style.transform = 'scale(1)';
        this.mainImage.style.cursor = 'zoom-in';
    }

    handleKeyboard(e) {
        // Left/Right arrow keys for image navigation
        if (e.key === 'ArrowLeft') {
            const prevIndex = this.currentImageIndex - 1;
            if (prevIndex >= 0) {
                this.switchImage(prevIndex, this.thumbnails[prevIndex]);
            }
        } else if (e.key === 'ArrowRight') {
            const nextIndex = this.currentImageIndex + 1;
            if (nextIndex < this.thumbnails.length) {
                this.switchImage(nextIndex, this.thumbnails[nextIndex]);
            }
        }
    }
}

// Initialize PDP when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProductDetailPage();

    // Related products add to cart
    document.querySelectorAll('.related-products .btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            showToast(`✓ ${productName.trim()} added to cart!`);
            
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                cartCount.textContent = parseInt(cartCount.textContent || 0) + 1;
            }
        });
    });
});

// Toast notification helper
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message show';
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container');
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
