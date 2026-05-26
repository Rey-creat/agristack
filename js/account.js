/* ============================================================================
   ACCOUNT PAGE JAVASCRIPT
   ============================================================================ */

// ============================================================================
// DOM Elements
// ============================================================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const sidebar = document.querySelector('.account-sidebar');
const navLinks = document.querySelectorAll('.nav-link:not(.logout)');
const contentSections = document.querySelectorAll('.content-section');
const logoutBtn = document.getElementById('logoutBtn');
const toastMessage = document.getElementById('toastMessage');

// ============================================================================
// Initialize
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeEventListeners();
    setActiveSection('dashboard');
});

// ============================================================================
// Navigation Functions
// ============================================================================

function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            setActiveSection(sectionId);
            closeMobileMenu();
        });
    });
}

function setActiveSection(sectionId) {
    // Remove active class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Remove active class from all sections
    contentSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to selected nav link
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Add active class to selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// ============================================================================
// Mobile Menu Functions
// ============================================================================

function openMobileMenu() {
    sidebar.classList.add('open');
}

function closeMobileMenu() {
    sidebar.classList.remove('open');
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.account-sidebar') && !e.target.closest('.mobile-menu-toggle')) {
        closeMobileMenu();
    }
});

// ============================================================================
// Logout Function
// ============================================================================

if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            // Redirect to login or home page
            window.location.href = 'index.html';
        }
    });
}

// ============================================================================
// Toast Notifications
// ============================================================================

function showToast(message, duration = 3000) {
    toastMessage.textContent = message;
    toastMessage.classList.add('show');
    
    setTimeout(() => {
        toastMessage.classList.remove('show');
    }, duration);
}

// ============================================================================
// Event Listeners Initialization
// ============================================================================

function initializeEventListeners() {
    // RFQ Button
    const createRfqBtn = document.getElementById('createRfqBtn');
    if (createRfqBtn) {
        createRfqBtn.addEventListener('click', () => {
            showToast('RFQ creation form would open here');
        });
    }

    // Financing Button
    const applyFinancingBtn = document.getElementById('applyFinancingBtn');
    if (applyFinancingBtn) {
        applyFinancingBtn.addEventListener('click', () => {
            showToast('Financing application form would open here');
        });
    }

    // Ticket Button
    const createTicketBtn = document.getElementById('createTicketBtn');
    if (createTicketBtn) {
        createTicketBtn.addEventListener('click', () => {
            showToast('Support ticket form would open here');
        });
    }

    // Address Button
    const addAddressBtn = document.getElementById('addAddressBtn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', () => {
            showToast('Address form would open here');
        });
    }

    // Edit Profile Link
    const editProfileLink = document.querySelector('.edit-profile-link');
    if (editProfileLink) {
        editProfileLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Edit profile form would open here');
        });
    }

    // Remove from Wishlist Buttons
    const wishlistRemoveButtons = document.querySelectorAll('.wishlist-remove');
    wishlistRemoveButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.wishlist-card');
            card.style.opacity = '0';
            setTimeout(() => {
                card.remove();
                showToast('Item removed from wishlist');
            }, 300);
        });
    });

    // Form Submission Handlers
    const settingsForms = document.querySelectorAll('.settings-form');
    settingsForms.forEach(form => {
        const saveButton = form.querySelector('button[type="button"]:first-of-type');
        if (saveButton) {
            saveButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleFormSubmit(form);
            });
        }

        const cancelButton = form.querySelector('button[type="button"]:nth-of-type(2)');
        if (cancelButton) {
            cancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                resetForm(form);
            });
        }
    });

    // Order Action Buttons
    const viewDetailsButtons = document.querySelectorAll('.order-actions .btn');
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonText = btn.textContent.trim();
            showToast(`${buttonText} feature coming soon`);
        });
    });

    // View All Links
    const viewAllLinks = document.querySelectorAll('.view-all-link');
    viewAllLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            setActiveSection(section);
        });
    });

    // RFQ and Financing View Buttons
    const cardButtons = document.querySelectorAll('.rfq-footer .btn, .financing-footer .btn, .ticket-footer .btn');
    cardButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonText = btn.textContent.trim();
            showToast(`${buttonText} feature coming soon`);
        });
    });

    // Toggle Switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', () => {
            const label = toggle.closest('.notification-item').querySelector('h4').textContent;
            const status = toggle.checked ? 'enabled' : 'disabled';
            showToast(`${label} ${status}`);
        });
    });

    // Search Input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value;
                if (searchTerm) {
                    showToast(`Searching for: ${searchTerm}`);
                }
            }, 500);
        });
    }

    // Filter Select
    const filterSelect = document.querySelector('.filter-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const filterValue = e.target.value;
            showToast(`Filtering by: ${filterValue}`);
        });
    }
}

// ============================================================================
// Form Handling
// ============================================================================

function handleFormSubmit(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (isValid) {
        showToast('Changes saved successfully!');
        // Simulate form submission
        setTimeout(() => {
            resetForm(form);
        }, 500);
    } else {
        showToast('Please fill in all required fields');
    }
}

function resetForm(form) {
    form.reset();
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Format currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Format date
 */
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================================================
// Smooth Scroll
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================================================
// Page Visibility
// ============================================================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// ============================================================================
// Performance: Lazy Load Images
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// Demo Data Simulation
// ============================================================================

/**
 * Simulate API call with mock data
 */
async function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                email: 'john.doe@agristack.com',
                phone: '(555) 123-4567',
                avatar: 'images/avatar.png'
            });
        }, 1000);
    });
}

/**
 * Simulate orders API call
 */
async function fetchOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 'ORD-2024-001',
                    name: 'Agricultural Tractor - Model X2000',
                    status: 'delivered',
                    date: '2024-05-20',
                    total: 25000
                },
                {
                    id: 'ORD-2024-002',
                    name: 'Digital Crop Sprayer System',
                    status: 'shipped',
                    date: '2024-05-22',
                    total: 8500
                }
            ]);
        }, 1000);
    });
}

// ============================================================================
// Keyboard Shortcuts (Optional)
// ============================================================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Escape to close mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// ============================================================================
// Animation Triggers
// ============================================================================

/**
 * Scroll animations
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.order-card, .wishlist-card, .rfq-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'all 0.3s ease-out';
    observer.observe(el);
});

// ============================================================================
// Console Logging (Development Only)
// ============================================================================

if (process?.env?.NODE_ENV === 'development') {
    console.log('Account page loaded');
    console.log('Navigation initialized');
    console.log('Mobile menu ready');
}
