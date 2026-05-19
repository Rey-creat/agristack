<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sale - AgriStack</title>
    
    <!-- Global Styles -->
    <link rel="stylesheet" href="css/global.css">
    
    <!-- Component Styles -->
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/brands.css">
    <link rel="stylesheet" href="css/categories.css">
    <link rel="stylesheet" href="css/products.css">
    <link rel="stylesheet" href="css/trust.css">
    <link rel="stylesheet" href="css/collections.css">
    <link rel="stylesheet" href="css/footer.css">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="top-banner">
            <div class="banner-content">
                <span><i class="fas fa-shipping-fast"></i> Free Shipping on orders over $500</span>
                <span><i class="fas fa-phone"></i> 24/7 Support: 1-800-AGRI-NET</span>
                <span><i class="fas fa-map-marker-alt"></i> Find a Dealer</span>
                <span>Track Order</span>
                <span>Help Center</span>
            </div>
        </div>

        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="index.php">
                            <img src="images/logo.png" alt="AgriStack Logo" class="logo-image">
                        </a>
                    </div>

                    <div class="search-bar">
                        <input type="text" placeholder="Search tractors, sprayers, tools...">
                        <button><i class="fas fa-search"></i></button>
                    </div>

                    <div class="nav-icons">
                        <div class="user-menu">
                            <i class="fas fa-user"></i>
                            <span>Account</span>
                        </div>
                        <div class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Page Navigation -->
    <section class="page-nav">
        <div class="nav-menu">
            <a href="index.php" class="nav-link home-link">
                <i class="fas fa-home"></i> Home
            </a>
            <div class="categories-dropdown-menu">
                <button class="dropdown-link">
                    <i class=""></i> Categories
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="dropdown-submenu">
                    <a href="tractors.php" class="submenu-item">Tractors</a>
                    <a href="sprayers.php" class="submenu-item">Sprayers</a>
                    <a href="irrigation.php" class="submenu-item">Irrigation</a>
                    <a href="tools.php" class="submenu-item">Tools & Parts</a>
                </div>
            </div>
            <a href="brands.php" class="nav-link">Brands</a>
            <a href="new-arrivals.php" class="nav-link">New Arrivals</a>
            <a href="sale.php" class="nav-link sale">Sale</a>
        </div>
    </section>

    <!-- Sale Banner -->
    <section class="sale-banner">
        <div class="container">
            <div class="banner-content">
                <h1><i class="fas fa-tag"></i> Mega Sale - Up to 50% OFF</h1>
                <p>Limited time offers on premium agricultural equipment</p>
            </div>
        </div>
    </section>

    <!-- Sale Products Section -->
    <section class="sale-page">
        <div class="container">
            <div class="page-header">
                <h1>Special Offers</h1>
                <p>Don't miss out on these incredible deals</p>
            </div>

            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="images/Kubota-tractor.jpg" alt="Compact Utility Tractor">
                        <span class="badge sale">-14% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Kubota L3901 Compact Tractor</h3>
                        <p class="product-brand">Kubota</p>
                        <div class="price-section">
                            <span class="price">$18,400</span>
                            <span class="original-price">$21,000</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/hypro.png" alt="Pro Field Sprayer">
                        <span class="badge sale">-25% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Hypro Sprayer 5100C</h3>
                        <p class="product-brand">Hypro</p>
                        <div class="price-section">
                            <span class="price">$3,150</span>
                            <span class="original-price">$4,200</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/rain-bird.jpg" alt="Smart Irrigation Hub">
                        <span class="badge sale">-30% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Rain Bird Irrigation Controller</h3>
                        <p class="product-brand">Rain Bird</p>
                        <div class="price-section">
                            <span class="price">$595</span>
                            <span class="original-price">$850</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/ag-leader-soilmap-probe.png" alt="AI Soil Analyzer">
                        <span class="badge sale">-35% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Ag Leader SoilMap Probe</h3>
                        <p class="product-brand">Ag Leader</p>
                        <div class="price-section">
                            <span class="price">$844</span>
                            <span class="original-price">$1,299</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/Massey-Ferguson.png" alt="Heavy-Duty Tractor">
                        <span class="badge sale">-20% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Massey Ferguson MF 4708 Tractor</h3>
                        <p class="product-brand">Massey Ferguson</p>
                        <div class="price-section">
                            <span class="price">$56,000</span>
                            <span class="original-price">$70,000</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/swaraj-tractor.jpg" alt="Precision Seed Drill">
                        <span class="badge sale">-40% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Swaraj 735 FE Tractor</h3>
                        <p class="product-brand">Swaraj</p>
                        <div class="price-section">
                            <span class="price">$2,400</span>
                            <span class="original-price">$4,000</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/topcon.jpg" alt="Crop Health Monitor">
                        <span class="badge sale">-28% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Topcon AES Precision Guidance</h3>
                        <p class="product-brand">Topcon</p>
                        <div class="price-section">
                            <span class="price">$1,548</span>
                            <span class="original-price">$2,150</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/vicon.jpg" alt="Automated Fertilizer Spreader">
                        <span class="badge sale">-22% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Vicon Spreader VS300T</h3>
                        <p class="product-brand">Vicon</p>
                        <div class="price-section">
                            <span class="price">$2,964</span>
                            <span class="original-price">$3,800</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/agrifac-tractor.png" alt="Electric Rotary Tiller">
                        <span class="badge sale">-32% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Agrifac Condor 12R Tiller</h3>
                        <p class="product-brand">Agrifac</p>
                        <div class="price-section">
                            <span class="price">$1,802</span>
                            <span class="original-price">$2,650</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/agricultural-drone.jpg" alt="Agricultural Drone Sprayer">
                        <span class="badge sale">-18% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>XAG V50 Agricultural Drone</h3>
                        <p class="product-brand">XAG</p>
                        <div class="price-section">
                            <span class="price">$12,710</span>
                            <span class="original-price">$15,500</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="images/mini-harvester.png" alt="Mini Harvest Combine">
                        <span class="badge sale">-15% OFF</span>
                    </div>
                    <div class="product-info">
                        <h3>Yto-Layland Mini Harvester</h3>
                        <p class="product-brand">YTO-Layland</p>
                        <div class="price-section">
                            <span class="price">$24,565</span>
                            <span class="original-price">$28,900</span>
                        </div>
                        <button class="btn-add-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="images/logo.png" alt="AgriStack Logo" class="logo-image">
                    </div>
                    <p>The world's leading agriculture equipment marketplace. Connecting farmers to quality equipment globally.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="#">Tractors</a></li>
                        <li><a href="#">Harvesting</a></li>
                        <li><a href="#">Planting & Seeding</a></li>
                        <li><a href="#">Tillage</a></li>
                        <li><a href="#">Hay & Forage</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Financing Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Payment Methods</h4>
                    <div class="payment-icons">
                        <img src="images/visa.jpg" alt="Visa" class="payment-icon">
                        <img src="images/mastercard.jpg" alt="Mastercard" class="payment-icon">
                        <img src="images/paypal.jpg" alt="PayPal" class="payment-icon">
                        <img src="images/americanexpress.jpg" alt="American Express" class="payment-icon">
                    </div>
                    <h4 class="subscribe-title">Subscribe</h4>
                    <div class="subscribe-form">
                        <input type="email" placeholder="Enter your email">
                        <button>Join</button>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 AgriStack Marketplace. All rights reserved.</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Legal</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script>
        // Categories dropdown in page navigation
        const pageNavBtn = document.querySelector('.page-nav .categories-dropdown-menu .dropdown-link');
        const pageNavMenu = document.querySelector('.page-nav .categories-dropdown-menu .dropdown-submenu');

        if (pageNavBtn && pageNavMenu) {
            // Toggle dropdown on button click
            pageNavBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = pageNavMenu.classList.contains('active');
                if (isOpen) {
                    pageNavMenu.classList.remove('active');
                    pageNavBtn.classList.remove('active');
                } else {
                    pageNavMenu.classList.add('active');
                    pageNavBtn.classList.add('active');
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                const isClickInsideMenu = e.target.closest('.page-nav .categories-dropdown-menu');
                if (!isClickInsideMenu && pageNavMenu.classList.contains('active')) {
                    pageNavMenu.classList.remove('active');
                    pageNavBtn.classList.remove('active');
                }
            });

            // Close dropdown after clicking a link
            const links = pageNavMenu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Don't prevent default - let the link navigate
                    pageNavMenu.classList.remove('active');
                    pageNavBtn.classList.remove('active');
                });
            });
        }
    </script>
</body>
</html>
