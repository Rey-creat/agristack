/* ============================================================================
   PRODUCT LISTING PAGE (PLP) JAVASCRIPT
   ============================================================================ */

class ProductListingPage {
    constructor() {
        this.allProducts = [];
        this.filteredProducts = [];
        this.currentSort = 'newest';
        this.activeFilters = {
            brand: [],
            type: [],
            horsepower: [],
            price: { min: 0, max: 100000 },
            availability: []
        };
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.loadProducts();
        this.attachEventListeners();
        this.updateProducts();
    }

    cacheElements() {
        this.filterInputs = document.querySelectorAll('.filter-input');
        this.sortSelect = document.getElementById('sort-select');
        this.productsContainer = document.getElementById('products-container');
        this.productCount = document.getElementById('product-count');
        this.priceMinSlider = document.getElementById('price-min');
        this.priceMaxSlider = document.getElementById('price-max');
        this.minPriceDisplay = document.getElementById('min-price');
        this.maxPriceDisplay = document.getElementById('max-price');
        this.clearFiltersBtn = document.getElementById('clear-filters-btn');
    }

    loadProducts() {
        // Get all product cards from DOM
        const productCards = document.querySelectorAll('.product-card');
        this.allProducts = Array.from(productCards).map(card => ({
            id: card.dataset.id,
            brand: card.dataset.brand,
            type: card.dataset.type,
            price: parseInt(card.dataset.price),
            hp: parseInt(card.dataset.hp),
            availability: card.dataset.availability,
            element: card
        }));
        
        this.filteredProducts = [...this.allProducts];
    }

    attachEventListeners() {
        // Filter checkboxes
        this.filterInputs.forEach(input => {
            input.addEventListener('change', () => this.applyFilters());
        });

        // Price range sliders
        if (this.priceMinSlider && this.priceMaxSlider) {
            this.priceMinSlider.addEventListener('input', (e) => this.handlePriceChange(e, 'min'));
            this.priceMaxSlider.addEventListener('input', (e) => this.handlePriceChange(e, 'max'));
        }

        // Sort dropdown
        if (this.sortSelect) {
            this.sortSelect.addEventListener('change', (e) => this.handleSort(e));
        }

        // Clear filters button
        if (this.clearFiltersBtn) {
            this.clearFiltersBtn.addEventListener('click', () => this.clearAllFilters());
        }

        // Filter group toggle
        document.querySelectorAll('.filter-title').forEach(title => {
            title.addEventListener('click', (e) => this.toggleFilterGroup(e));
        });
    }

    applyFilters() {
        this.resetActiveFilters();
        
        // Get checked filters
        this.filterInputs.forEach(input => {
            if (input.checked) {
                const filterName = input.name;
                const filterValue = input.value;
                
                if (filterName in this.activeFilters && Array.isArray(this.activeFilters[filterName])) {
                    this.activeFilters[filterName].push(filterValue);
                }
            }
        });

        this.filterProducts();
        this.updateProductDisplay();
    }

    filterProducts() {
        this.filteredProducts = this.allProducts.filter(product => {
            // Brand filter
            if (this.activeFilters.brand.length > 0 && !this.activeFilters.brand.includes(product.brand)) {
                return false;
            }

            // Type filter
            if (this.activeFilters.type.length > 0 && !this.activeFilters.type.includes(product.type)) {
                return false;
            }

            // Horsepower filter
            if (this.activeFilters.horsepower.length > 0) {
                const hpMatch = this.activeFilters.horsepower.some(range => {
                    if (range === '0-50') return product.hp >= 0 && product.hp <= 50;
                    if (range === '50-100') return product.hp > 50 && product.hp <= 100;
                    if (range === '100-150') return product.hp > 100 && product.hp <= 150;
                    if (range === '150+') return product.hp > 150;
                    return false;
                });
                if (!hpMatch) return false;
            }

            // Price filter
            if (product.price < this.activeFilters.price.min || product.price > this.activeFilters.price.max) {
                return false;
            }

            // Availability filter
            if (this.activeFilters.availability.length > 0 && !this.activeFilters.availability.includes(product.availability)) {
                return false;
            }

            return true;
        });

        this.sortProducts();
    }

    sortProducts() {
        switch(this.currentSort) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                // In real app, would sort by sales/ratings
                break;
            case 'newest':
            default:
                // Keep original order (newest first)
                break;
        }
    }

    handleSort(e) {
        this.currentSort = e.target.value;
        this.sortProducts();
        this.updateProductDisplay();
    }

    handlePriceChange(e, type) {
        const minVal = parseInt(this.priceMinSlider.value);
        const maxVal = parseInt(this.priceMaxSlider.value);

        if (minVal > maxVal) {
            if (type === 'min') {
                this.priceMinSlider.value = maxVal;
            } else {
                this.priceMaxSlider.value = minVal;
            }
            return;
        }

        this.activeFilters.price.min = minVal;
        this.activeFilters.price.max = maxVal;

        this.minPriceDisplay.textContent = this.formatPrice(minVal);
        this.maxPriceDisplay.textContent = this.formatPrice(maxVal);

        this.filterProducts();
        this.updateProductDisplay();
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-US').format(price);
    }

    clearAllFilters() {
        // Uncheck all checkboxes
        this.filterInputs.forEach(input => input.checked = false);

        // Reset price sliders
        if (this.priceMinSlider && this.priceMaxSlider) {
            this.priceMinSlider.value = 0;
            this.priceMaxSlider.value = 100000;
            this.minPriceDisplay.textContent = '0';
            this.maxPriceDisplay.textContent = '100,000';
        }

        // Reset filters
        this.resetActiveFilters();
        this.filteredProducts = [...this.allProducts];
        this.sortProducts();
        this.updateProductDisplay();
    }

    resetActiveFilters() {
        this.activeFilters = {
            brand: [],
            type: [],
            horsepower: [],
            price: { min: 0, max: 100000 },
            availability: []
        };
    }

    updateProductDisplay() {
        // Hide all products
        this.allProducts.forEach(product => product.element.style.display = 'none');

        // Show filtered products
        this.filteredProducts.forEach((product, index) => {
            product.element.style.display = 'block';
            product.element.style.animation = `fadeIn 0.3s ease-in ${index * 0.05}s`;
        });

        // Update product count
        this.productCount.textContent = this.filteredProducts.length;
    }

    toggleFilterGroup(e) {
        const filterGroup = e.target.closest('.filter-group');
        filterGroup.classList.toggle('collapsed');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProductListingPage();

    // Add to Cart functionality
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Show toast notification
            showToast(`${productName} added to cart!`);
            
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                cartCount.textContent = parseInt(cartCount.textContent || 0) + 1;
            }
        });
    });

    // Wishlist functionality
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            
            if (btn.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('Added to Wishlist');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('Removed from Wishlist');
            }
        });
    });
});

// Toast notification helper
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message show';
    toast.textContent = message;
    
    const container = document.querySelector('.toast-container') || document.body;
    if (!document.querySelector('.toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    document.querySelector('.toast-container').appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
