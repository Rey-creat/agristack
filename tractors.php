<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tractors - AgriStack</title>
    
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
                        <a href="index.html">
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
            <a href="index.html" class="nav-link home-link">
                <i class="fas fa-home"></i> Home
            </a>
            <div class="categories-dropdown-menu">
                <button class="dropdown-link">
                    Categories
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="dropdown-submenu">
                    <a href="tractors.php" class="submenu-item active">Tractors</a>
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

    <!-- Tractors Category Section -->
    <section class="category-page">
        <div class="container">
            <div class="category-header">
                <h1><i class="fas fa-tractor"></i> Tractors</h1>
                <p>Premium tractors from the world's leading manufacturers</p>
            </div>

            <div class="products-grid">
                    <!-- Product placeholders - Images to be added -->
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-1.jpg" alt="Compact Utility Tractor">
                            <span class="badge">Featured</span>
                        </div>
                        <div class="product-info">
                            <h3>Compact Utility Tractor</h3>
                            <p class="product-brand">John Deere</p>
                            <div class="price-section">
                                <span class="price">$18,400</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-2.jpg" alt="Premium Utility Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Premium Utility Tractor</h3>
                            <p class="product-brand">Kubota</p>
                            <div class="price-section">
                                <span class="price">$52,900</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-3.jpg" alt="Row Crop Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Row Crop Tractor</h3>
                            <p class="product-brand">CASE IH</p>
                            <div class="price-section">
                                <span class="price">$67,300</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-4.jpg" alt="Flagship Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Flagship Tractor</h3>
                            <p class="product-brand">Mahindra</p>
                            <div class="price-section">
                                <span class="price">$61,200</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-5.jpg" alt="Heavy-Duty Farm Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Heavy-Duty Farm Tractor</h3>
                            <p class="product-brand">New Holland</p>
                            <div class="price-section">
                                <span class="price">$75,500</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-6.jpg" alt="Mid-Size Agricultural Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Mid-Size Agricultural Tractor</h3>
                            <p class="product-brand">John Deere</p>
                            <div class="price-section">
                                <span class="price">$42,800</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-7.jpg" alt="Compact Garden Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Compact Garden Tractor</h3>
                            <p class="product-brand">Kubota</p>
                            <div class="price-section">
                                <span class="price">$28,900</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-8.jpg" alt="Precision Power Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Precision Power Tractor</h3>
                            <p class="product-brand">CASE IH</p>
                            <div class="price-section">
                                <span class="price">$58,600</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-9.jpg" alt="Professional Series Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Professional Series Tractor</h3>
                            <p class="product-brand">Mahindra</p>
                            <div class="price-section">
                                <span class="price">$48,900</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-10.jpg" alt="Smart Connected Tractor">
                        </div>
                        <div class="product-info">
                            <h3>Smart Connected Tractor</h3>
                            <p class="product-brand">Kubota</p>
                            <div class="price-section">
                                <span class="price">$65,400</span>
                            </div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/tractor-product-11.jpg" alt="EcoFarm Tractor Series">
                        </div>
                        <div class="product-info">
                            <h3>EcoFarm Tractor Series</h3>
                            <p class="product-brand">John Deere</p>
                            <div class="price-section">
                                <span class="price">$52,100</span>
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
                pageNavMenu.classList.toggle('active');
                pageNavBtn.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.page-nav .categories-dropdown-menu')) {
                    pageNavMenu.classList.remove('active');
                    pageNavBtn.classList.remove('active');
                }
            });
        }
    </script>
</body>
</html>
