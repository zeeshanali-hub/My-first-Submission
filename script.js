/**
 * PIZZA PLANET - ENTERPRISE FRONTEND LOGIC
 * Version: 2.0.1
 * Description: Handles SPA Routing, Shopping Cart, Filtering, and Data Management.
 */


// 1. PRODUCT DATA (Matching HTML IDs)

const products = [
    // PIZZAS
    { id: 101, name: "Margherita Supreme", category: "pizza", price: 12.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500" },
    { id: 102, name: "Pepperoni Feast", category: "pizza", price: 14.99, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500" },
    { id: 103, name: "BBQ Chicken", category: "pizza", price: 15.50, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 104, name: "Meat Lovers", category: "pizza", price: 16.99, img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500" },
    { id: 105, name: "Veggie Garden", category: "pizza", price: 13.50, img: "https://images.unsplash.com/photo-1571407970349-bc487d773175?w=500" },
    { id: 106, name: "Hawaiian Sunset", category: "pizza", price: 14.00, img: "https://images.unsplash.com/photo-1593560708920-6389288e6ce4?w=500" },
    { id: 107, name: "Buffalo Chicken", category: "pizza", price: 15.00, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" },
    { id: 108, name: "Truffle Mushroom", category: "pizza", price: 17.50, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500" },

    // BURGERS
    { id: 201, name: "Classic Beef", category: "burger", price: 9.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 202, name: "Crispy Chicken", category: "burger", price: 8.99, img: "https://images.unsplash.com/photo-1615297928064-24977384d0f9?w=500" },
    { id: 203, name: "Bacon Smash", category: "burger", price: 11.50, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500" },
    { id: 204, name: "Mushroom Swiss", category: "burger", price: 10.99, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 205, name: "Spicy Jalapeno", category: "burger", price: 10.50, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500" },
    { id: 206, name: "Beyond Burger", category: "burger", price: 12.00, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 207, name: "Filet-O-Fish", category: "burger", price: 9.50, img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500" },
    { id: 208, name: "Texas BBQ", category: "burger", price: 11.99, img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500" },

    // SIDES
    { id: 301, name: "French Fries", category: "sides", price: 3.99, img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500" },
    { id: 302, name: "Onion Rings", category: "sides", price: 4.50, img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500" },
    { id: 303, name: "Mozzarella Sticks", category: "sides", price: 5.99, img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500" },
    { id: 304, name: "Spicy Wings", category: "sides", price: 7.99, img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500" },
    { id: 305, name: "Caesar Salad", category: "sides", price: 6.50, img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500" },
    { id: 306, name: "Garlic Bread", category: "sides", price: 3.50, img: "https://images.unsplash.com/photo-1619535860434-7f0863384d15?w=500" },
    { id: 307, name: "Coleslaw", category: "sides", price: 2.99, img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=500" },
    { id: 308, name: "Potato Wedges", category: "sides", price: 4.50, img: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=500" },

    // DRINKS
    { id: 401, name: "Cola", category: "drinks", price: 1.99, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
    { id: 402, name: "Milkshake", category: "drinks", price: 4.99, img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500" },
    { id: 403, name: "Iced Coffee", category: "drinks", price: 3.50, img: "https://images.unsplash.com/photo-1517701604599-bb29b5aa5023?w=500" },
    { id: 404, name: "Lemonade", category: "drinks", price: 2.99, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500" },
    { id: 405, name: "Orange Juice", category: "drinks", price: 3.50, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500" },
    { id: 406, name: "Mineral Water", category: "drinks", price: 1.50, img: "https://images.unsplash.com/photo-1564414297-70223080d7ba?w=500" },
    { id: 407, name: "Virgin Mojito", category: "drinks", price: 3.99, img: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500" },
    { id: 408, name: "Iced Tea", category: "drinks", price: 2.50, img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500" }
];


// 2. APPLICATION CONTROLLER CLASS

class PizzaPlanetApp {
    constructor() {
        this.cart = [];
        this.state = {
            activeView: 'home',
            searchOpen: false,
            cartOpen: false,
            mobileMenuOpen: false
        };
        
        // Bind methods
        this.init = this.init.bind(this);
        this.router = this.router.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.updateCartQty = this.updateCartQty.bind(this);
        this.renderCart = this.renderCart.bind(this);
        this.filterMenu = this.filterMenu.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    init() {
        console.log("Pizza Planet System: Initialized");
        this.router('home'); // Default Route
        this.loadCartFromStorage();
        this.attachGlobalListeners();
    }

    
    // 3. ROUTING (SPA)
   
    router(pageId) {
        // 1. Hide all views
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            view.classList.remove('active-view');
            view.style.display = 'none'; // Hard reset
        });

        // 2. Show Target View
        const target = document.getElementById(pageId);
        if (target) {
            target.style.display = 'block';
            // Tiny timeout for animation class
            setTimeout(() => target.classList.add('active-view'), 10);
        }

        // 3. Update Nav State
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
            if(link.dataset.target === pageId) {
                link.classList.add('active');
            }
        });

        // 4. Close Mobile Menu if open
        if(this.state.mobileMenuOpen) this.toggleMobileMenu();

        // 5. Scroll to top
        window.scrollTo(0,0);
    }

    // 4. CART LOGIC
  
    toggleCart() {
        const drawer = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        
        this.state.cartOpen = !this.state.cartOpen;
        
        if (this.state.cartOpen) {
            drawer.classList.add('open');
            overlay.classList.add('active');
        } else {
            drawer.classList.remove('open');
            overlay.classList.remove('active');
        }
    }

    addToCart(productId) {
        // Find product in data
        const product = products.find(p => p.id === productId);
        
        if (!product) return console.error("Product not found");

        // Check if exists in cart
        const existingItem = this.cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.qty++;
        } else {
            this.cart.push({
                ...product,
                qty: 1
            });
        }

        this.saveCart();
        this.renderCart();
        this.toggleCart(); // Show cart on add
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCart();
    }

    updateCartQty(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;

        item.qty += change;

        if (item.qty <= 0) {
            this.removeFromCart(productId);
        } else {
            this.saveCart();
            this.renderCart();
        }
    }

    renderCart() {
        const cartBody = document.getElementById('cart-body');
        const countBadge = document.getElementById('header-cart-count');
        const totalEl = document.getElementById('cart-total');

        // 1. Update Count
        const totalQty = this.cart.reduce((sum, item) => sum + item.qty, 0);
        countBadge.innerText = totalQty;

        // 2. Calculate Total Price
        const totalPrice = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        totalEl.innerText = `$${totalPrice.toFixed(2)}`;

        // 3. Render Items
        if (this.cart.length === 0) {
            cartBody.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-basket" style="font-size:3rem; margin-bottom:10px;"></i>
                    <p>Your cart is empty.</p>
                </div>
            `;
            return;
        }

        cartBody.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <div class="price">$${(item.price * item.qty).toFixed(2)}</div>
                    <div class="item-qty">
                        <button class="qty-control" onclick="app.updateCartQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-control" onclick="app.updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button onclick="app.removeFromCart(${item.id})" style="background:none; border:none; color:#e74c3c; cursor:pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    saveCart() {
        localStorage.setItem('pizzaPlanetCart', JSON.stringify(this.cart));
    }

    loadCartFromStorage() {
        const saved = localStorage.getItem('pizzaPlanetCart');
        if (saved) {
            this.cart = JSON.parse(saved);
            this.renderCart();
        }
    }


    // 5. FILTERING & SEARCH
   
    filterMenu(category, btnElement) {
        // Visual Update for Buttons
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');

        // Logic
        const items = document.querySelectorAll('.product-card');
        
        items.forEach(item => {
            const itemCat = item.getAttribute('data-cat');
            if (category === 'all' || itemCat === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    toggleSearch() {
        const modal = document.getElementById('search-modal');
        this.state.searchOpen = !this.state.searchOpen;
        
        if(this.state.searchOpen) {
            modal.classList.add('active');
            document.getElementById('global-search').focus();
        } else {
            modal.classList.remove('active');
        }
    }

    handleSearch() {
        const query = document.getElementById('global-search').value.toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        
        if(query.length < 2) {
            resultsContainer.innerHTML = '';
            return;
        }

        const matches = products.filter(p => p.name.toLowerCase().includes(query));

        if(matches.length === 0) {
            resultsContainer.innerHTML = '<p style="color:white; margin-top:20px;">No results found.</p>';
            return;
        }

        resultsContainer.innerHTML = matches.map(p => `
            <div style="background:#1e1e1e; padding:10px; margin-top:10px; border-radius:5px; display:flex; align-items:center; gap:10px; text-align:left; cursor:pointer;" onclick="app.addToCart(${p.id}); app.toggleSearch();">
                <img src="${p.img}" style="width:50px; height:50px; border-radius:5px;">
                <div>
                    <h4 style="color:white; margin:0;">${p.name}</h4>
                    <span style="color:#e74c3c;">$${p.price}</span>
                </div>
            </div>
        `).join('');
    }

    // 6. UI UTILITIES
   
    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        this.state.mobileMenuOpen = !this.state.mobileMenuOpen;
        
        if(this.state.mobileMenuOpen) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    }

    attachGlobalListeners() {
        // Form Submission
        const form = document.getElementById('feedback-form');
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Feedback sent! Thank you for your input.');
                form.reset();
            });
        }
    }
}

// Initialize App globally
const app = new PizzaPlanetApp();
document.addEventListener('DOMContentLoaded', app.init);