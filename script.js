/* ============================================================================
   AGRISTACK HOMEPAGE - JAVASCRIPT FUNCTIONALITY
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all event listeners
    initPageTransitions();
    initCartFunctionality();
    initTabFiltering();
    initCarousel();
    initAddToCart();
    initSearch();
    initParallax();
});

/* ============================================================================
   SMOOTH PAGE TRANSITIONS
   ============================================================================ */
function initPageTransitions() {
    // Add page load animation
    document.body.style.opacity = '0';
    document.body.style.animation = 'fadeInPage 0.8s ease-out forwards';
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target && href !== '#') {
                e.preventDefault();
                
                // Smooth scroll with offset
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Highlight effect
                target.style.transition = 'all 0.3s ease';
                target.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.3)';
                setTimeout(() => {
                    target.style.boxShadow = '';
                }, 800);
            }
        });
    });
    
    // Observe elements for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section, .product-card, .collection-card, .category-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(element);
    });
}

/* ============================================================================
   PARALLAX EFFECT WITH SMOOTH TRANSITIONS
   ============================================================================ */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const parallaxSpeed = 0.5;
    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollPos = window.scrollY;
            const elementOffset = element.getBoundingClientRect().top + scrollPos;
            const distance = scrollPos - elementOffset;
            const yPos = distance * parallaxSpeed;
            
            element.style.transform = `translateY(${yPos}px)`;
            element.style.transition = 'transform 0.1s ease-out';
        });
        
        // Apply fade-in effects for sections on scroll
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initial setup for parallax elements
    parallaxElements.forEach(element => {
        element.style.willChange = 'transform';
        element.style.transition = 'transform 0.1s ease-out';
    });
    
    // Fade-in effect for sections on page load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    });
    
    window.dispatchEvent(new Event('scroll'));
}

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
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
        }
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
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
/* ============================================================================
   PRODUCT DATA FOR DIFFERENT TABS
   ============================================================================ */
const productsData = {
    'Best Sellers': [
        {
            title: 'Next-Gen Farming Tractor',
            image: 'images/nextgen.jpg',
            price: '$18,400',
            badge: 'Sale'
        },
        {
            title: 'Ultra-Precise Crop Spraying System',
            image: 'images/Spraying System.jpg',
            price: '$4,200',
            badge: ''
        },
        {
            title: 'Intelligent Irrigation Management',
            image: 'images/IntelligentIrrigation.jpg',
            price: '$850',
            badge: ''
        },
        {
            title: 'Commercial Grade Soil Tiller',
            image: 'images/GradeSoilTiller.jpg',
            price: '$2,100',
            badge: ''
        }
    ],
    'Trending': [
        {
            title: 'Smart IoT Tractor System',
            image: 'images/compact utility.jpg',
            price: '$22,900',
            badge: 'Hot'
        },
        {
            title: 'Automated Pest Control Sprayer',
            image: 'images/sprayer.jpg',
            price: '$5,800',
            badge: ''
        },
        {
            title: 'AI-Powered Crop Monitor',
            image: 'images/smartirrigation.jpg',
            price: '$1,200',
            badge: 'New'
        },
        {
            title: 'Precision Seed Drill Machine',
            image: 'images/heavyduty.jpg',
            price: '$3,450',
            badge: 'Hot'
        }
    ],
    'Sale': [
        {
            title: 'Compact Utility Tractor 3025E',
            image: 'images/compact utility.jpg',
            price: '$18,400',
            badge: 'Sale',
            originalPrice: '$21,000'
        },
        {
            title: 'Pro Field Sprayer 2000',
            image: 'images/sprayer.jpg',
            price: '$3,500',
            badge: 'Sale',
            originalPrice: '$4,800'
        },
        {
            title: 'Smart Irrigation Hub V2',
            image: 'images/smartirrigation.jpg',
            price: '$599',
            badge: 'Sale',
            originalPrice: '$850'
        },
        {
            title: 'Heavy Duty Rotary Tiller',
            image: 'images/heavyduty.jpg',
            price: '$1,799',
            badge: 'Sale',
            originalPrice: '$2,100'
        }
    ]
};

function renderCollectionCards(products) {
    const collectionGrid = document.querySelector('.collection-grid');
    if (!collectionGrid) return;
    
    collectionGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'collection-card';
        card.style.animation = 'slideInUp 0.5s ease forwards';
        
        const badgeHTML = product.badge ? `<span class="sale-badge">${product.badge}</span>` : '';
        const originalPriceHTML = product.originalPrice ? `<p class="original-price">${product.originalPrice}</p>` : '';
        
        card.innerHTML = `
            <div class="collection-image">
                <img src="${product.image}" alt="${product.title}">
                ${badgeHTML}
            </div>
            <h3>${product.title}</h3>
            <div class="price-section">
                <p class="price">${product.price}</p>
                ${originalPriceHTML}
            </div>
            <button class="btn-add-cart">Add to Cart</button>
        `;
        
        collectionGrid.appendChild(card);
    });
    
    // Re-attach hover effects to new cards
    document.querySelectorAll('.collection-card').forEach(card => {
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
    
    // Re-attach add to cart functionality
    initAddToCart();
}

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
            
            // Get products for the selected tab
            const selectedProducts = productsData[filterType];
            
            if (selectedProducts) {
                // Fade out current cards
                const cards = document.querySelectorAll('.collection-card');
                cards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                });
                
                // Render new cards after fade out
                setTimeout(() => {
                    renderCollectionCards(selectedProducts);
                }, 300);
            }
        });
    });
    
    // Initialize with Best Sellers
    renderCollectionCards(productsData['Best Sellers']);
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
