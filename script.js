/* ============================================================================
   AGRISTACK HOMEPAGE - JAVASCRIPT FUNCTIONALITY
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all event listeners
    initCartFunctionality();
    initTabFiltering();
    initCarousel();
    initAddToCart();
    initSearch();
});

/* ============================================================================
   CART FUNCTIONALITY
   ============================================================================ */
function initCartFunctionality() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    let cart = [];

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Cart clicked. Current items:', cart.length);
    });

    // Store cart count
    window.cartCount = cartCount;
    window.cart = cart;
}

/* ============================================================================
   ADD TO CART BUTTONS
   ============================================================================ */
function initAddToCart() {
    const addToCartBtns = document.querySelectorAll('.btn-add-cart');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const product = this.closest('.product-card') || this.closest('.collection-card');
            const productName = product.querySelector('h3').textContent;
            const price = product.querySelector('.price').textContent;
            
            // Add to cart
            window.cart.push({
                name: productName,
                price: price
            });
            
            // Update cart count
            window.cartCount.textContent = window.cart.length;
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = '✓ Added to Cart';
            this.style.background = '#22c55e';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);

            // Log to console
            console.log('Item added to cart:', productName);
        });
    });
}

/* ============================================================================
   SEARCH FUNCTIONALITY
   ============================================================================ */
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-bar button');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                // In a real app, this would trigger a search
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

/* ============================================================================
   CAROUSEL FUNCTIONALITY
   ============================================================================ */
function initCarousel() {
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        updateCarousel();
    }, 5000);
}

/* ============================================================================
   TAB FILTERING
   ============================================================================ */
function initTabFiltering() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            const filterType = this.textContent.trim();
            console.log('Filtering by:', filterType);
            
            // Add animation to collection cards
            const cards = document.querySelectorAll('.collection-card');
            cards.forEach(card => {
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'slideInUp 0.5s ease forwards';
                }, 10);
            });
        });
    });
}

/* ============================================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ============================================================================
   NAVIGATION MENU TOGGLE (for mobile)
   ============================================================================ */
function initMobileNav() {
    // Add mobile menu toggle if needed
    const categoryBtn = document.querySelector('.category-btn');
    if (categoryBtn) {
        categoryBtn.addEventListener('click', function() {
            console.log('Categories menu opened');
            // In a real app, this would show a dropdown menu
        });
    }
}

initMobileNav();

/* ============================================================================
   HOVER EFFECTS FOR PRODUCT CARDS
   ============================================================================ */
document.querySelectorAll('.product-card, .collection-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });

    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

/* ============================================================================
   CATEGORY CARD CLICK HANDLER
   ============================================================================ */
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent;
        console.log('Navigating to category:', category);
    });
});

/* ============================================================================
   BRAND ITEM CLICK HANDLER
   ============================================================================ */
document.querySelectorAll('.brand-item').forEach(item => {
    item.addEventListener('click', function() {
        console.log('Brand clicked');
    });
});

/* ============================================================================
   USER MENU DROPDOWN
   ============================================================================ */
document.querySelector('.user-menu').addEventListener('click', function() {
    console.log('User menu opened');
    // In a real app, this would show user login/account options
});

/* ============================================================================
   SUBSCRIBE FORM
   ============================================================================ */
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    const subscribeInput = subscribeForm.querySelector('input');
    const subscribeBtn = subscribeForm.querySelector('button');

    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = subscribeInput.value.trim();
        
        if (email && isValidEmail(email)) {
            console.log('Subscribed with email:', email);
            subscribeBtn.textContent = '✓ Subscribed';
            subscribeBtn.style.background = '#22c55e';
            subscribeInput.value = '';
            
            setTimeout(() => {
                subscribeBtn.textContent = 'Join';
                subscribeBtn.style.background = '';
            }, 3000);
        } else {
            console.log('Invalid email');
        }
    });
}

/* ============================================================================
   HELPER FUNCTIONS
   ============================================================================ */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* ============================================================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product and collection cards
document.querySelectorAll('.product-card, .collection-card, .category-card').forEach(card => {
    observer.observe(card);
});

/* ============================================================================
   PERFORMANCE: LAZY LOADING IMAGES
   ============================================================================ */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ============================================================================
   SCROLL TO TOP BUTTON
   ============================================================================ */
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        // Show scroll-to-top button (if you add one)
    }
});

console.log('AgriStack Homepage loaded successfully!');
