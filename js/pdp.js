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
        this.loadProductFromQuery();
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
        this.btn360 = document.querySelector('.btn-360');
    }

    // Load product data based on ?id= in URL and populate PDP fields
    loadProductFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const imgParam = params.get('img');
        const titleParam = params.get('title');

        // If an image URL is provided, use it directly (allows linking from other categories)
        if (imgParam) {
            const decodedImg = decodeURIComponent(imgParam);
            if (this.mainImage) this.mainImage.src = decodedImg;
            if (titleParam) {
                const titleEl = document.querySelector('.product-header h1');
                if (titleEl) titleEl.textContent = decodeURIComponent(titleParam);
            }

            // Ensure thumbnails container reflects the clicked image: rebuild thumbnails
            const thumbsContainer = document.querySelector('.gallery-thumbnails');
            if (thumbsContainer) {
                thumbsContainer.innerHTML = '';
                const img = document.createElement('img');
                img.src = decodedImg;
                img.alt = 'View 1';
                img.className = 'thumbnail active';
                img.dataset.full = decodedImg;
                thumbsContainer.appendChild(img);

                // Refresh thumbnails NodeList and attach click handler
                this.thumbnails = document.querySelectorAll('.thumbnail');
                this.thumbnails.forEach((thumb, index) => {
                    thumb.addEventListener('click', () => this.switchImage(index, thumb));
                });

                this.currentImageIndex = 0;
            }

            return;
        }

        if (!id) return;

        const products = {
            '1': { title: 'Compact Utility Tractor 3025E', brand: 'John Deere', price: '$18,400', sku: 'JD-3025E-2024', images: ['images/CUTractor.png','images/CUTractor-2.png','images/CUTractor-3.png','images/CUTractor-4.png'], availability: 'in-stock' },
            '2': { title: 'Premium Utility Tractor M5091', brand: 'Kubota', price: '$52,900', sku: 'KB-M5091-2024', images: ['images/PUTractor.jpg'] , availability: 'in-stock'},
            '3': { title: 'Row Crop Tractor Puma 125', brand: 'CASE IH', price: '$67,300', sku: 'CIH-PUMA125-2024', images: ['images/RCTractor.jpg'], availability: 'in-stock'},
            '4': { title: 'Flagship Tractor Novo 740', brand: 'Mahindra', price: '$61,200', sku: 'MH-NOVO740-2024', images: ['images/6RFSTractor.jpg'], availability: 'low-stock'},
            '5': { title: 'Heavy-Duty Farm Tractor T8', brand: 'New Holland', price: '$75,500', sku: 'NH-T8-2024', images: ['images/HDTractor.jpg'], availability: 'in-stock'},
            '6': { title: 'Mid-Size Agricultural Tractor 5075E', brand: 'John Deere', price: '$42,800', sku: 'JD-5075E-2024', images: ['images/MSTractor.jpg'], availability: 'in-stock'},
            '7': { title: 'Compact Garden Tractor B2650', brand: 'Kubota', price: '$28,900', sku: 'KB-B2650-2024', images: ['images/CGTractor.jpg'], availability: 'pre-order'},
            '8': { title: 'Precision Power Tractor Puma 155', brand: 'CASE IH', price: '$58,600', sku: 'CIH-PUMA155-2024', images: ['images/9rPPTractor.jpg'], availability: 'in-stock'},
            '9': { title: 'Professional Series Tractor JIVO', brand: 'Mahindra', price: '$48,900', sku: 'MH-JIVO-2024', images: ['images/ProSTractor.jpg'], availability: 'low-stock'},
            '10': { title: 'Smart Connected Tractor M7171', brand: 'Kubota', price: '$65,400', sku: 'KB-M7171-2024', images: ['images/tractor-product-10.jpg'], availability: 'pre-order'},
            '11': { title: 'EcoFarm Tractor Series 6105E', brand: 'John Deere', price: '$52,100', sku: 'JD-6105E-2024', images: ['images/EFSTractor.jpg'], availability: 'in-stock'},
            '12': { title: 'Compact Utility Power JX55', brand: 'CASE IH', price: '$35,600', sku: 'CIH-JX55-2024', images: ['images/CompactCase.jpg'], availability: 'in-stock'}
        };

        const data = products[id];
        if (!data) return;

        // Update title, brand, price, sku
        const titleEl = document.querySelector('.product-header h1');
        const brandEl = document.querySelector('.product-brand');
        const priceEl = document.querySelector('.price-section-pdp .price');
        const skuEl = document.querySelector('.price-section-pdp .sku');
        const skuStrong = skuEl ? skuEl.querySelector('strong') : null;

        if (titleEl) titleEl.textContent = data.title;
        if (brandEl) brandEl.textContent = data.brand;
        if (priceEl) priceEl.textContent = data.price;
        if (skuStrong) skuStrong.textContent = data.sku;

        // Update availability badge
        const stockBadge = document.querySelector('.stock-badge');
        if (stockBadge) {
            stockBadge.classList.remove('in-stock','low-stock','pre-order');
            stockBadge.classList.add(data.availability);
            if (data.availability === 'in-stock') stockBadge.innerHTML = '<i class="fas fa-check"></i> In Stock';
            if (data.availability === 'low-stock') stockBadge.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Low Stock';
            if (data.availability === 'pre-order') stockBadge.innerHTML = '<i class="fas fa-clock"></i> Pre-order';
        }

        // Update main image and thumbnails
        if (this.mainImage) {
            this.mainImage.src = data.images[0];
        }

        const thumbsContainer = document.querySelector('.gallery-thumbnails');
        if (thumbsContainer) {
            thumbsContainer.innerHTML = '';
            data.images.forEach((src, idx) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `View ${idx+1}`;
                img.className = 'thumbnail' + (idx===0 ? ' active' : '');
                img.dataset.full = src;
                thumbsContainer.appendChild(img);
            });

            // refresh thumbnails NodeList
            this.thumbnails = document.querySelectorAll('.thumbnail');

            // reattach thumbnail click handlers
            this.thumbnails.forEach((thumb, index) => {
                thumb.addEventListener('click', () => this.switchImage(index, thumb));
            });
        }
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
        if (this.btn360) {
            this.btn360.addEventListener('click', () => this.open360Viewer());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Image zoom on hover (desktop)
        if (window.innerWidth > 768) {
            this.mainImage.addEventListener('mousemove', (e) => this.handleImageZoom(e));
            this.mainImage.addEventListener('mouseleave', () => this.resetImageZoom());
        }

        // Touch swipe support (mobile)
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.mainImage.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.mainImage.addEventListener('touchend', (e) => this.handleTouchEnd(e));
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

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].clientX;
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].clientX;
        const deltaX = this.touchEndX - this.touchStartX;
        const threshold = 50; // px

        if (Math.abs(deltaX) > threshold) {
            if (deltaX < 0) {
                // swipe left -> next
                const nextIndex = Math.min(this.currentImageIndex + 1, this.thumbnails.length - 1);
                if (nextIndex !== this.currentImageIndex) this.switchImage(nextIndex, this.thumbnails[nextIndex]);
            } else {
                // swipe right -> prev
                const prevIndex = Math.max(this.currentImageIndex - 1, 0);
                if (prevIndex !== this.currentImageIndex) this.switchImage(prevIndex, this.thumbnails[prevIndex]);
            }
        }
    }

    open360Viewer() {
        // Minimal placeholder for 360° viewer
        const overlay = document.createElement('div');
        overlay.className = 'viewer-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.right = 0;
        overlay.style.bottom = 0;
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;

        const box = document.createElement('div');
        box.style.background = '#fff';
        box.style.padding = '20px';
        box.style.borderRadius = '8px';
        box.style.maxWidth = '90%';
        box.style.maxHeight = '90%';
        box.style.textAlign = 'center';

        box.innerHTML = '<h3>360° Viewer (placeholder)</h3><p>Interactive 360° view coming soon.</p><button class="btn-close-360">Close</button>';

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        overlay.querySelector('.btn-close-360').addEventListener('click', () => overlay.remove());
    }
}

// Initialize PDP when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProductDetailPage();

    // Related products now link to PDP; no in-listing add-to-cart handler required.
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
