// ==========================
// Product Detail JS - English Only
// ==========================

// Get product description
function getProductDescription(product) {
    return product.description || 'This is a high-quality product perfect for use.';
}

// Display product detail
function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = items.find(item => item.id === productId);

    if (!product) {
        document.getElementById('productDetailContent').innerHTML = '<p>Product not found</p>';
        return;
    }

    // Images
    let imagesHTML = product.images.map((image, index) => `
        <div class="detail-image ${index === 0 ? 'active' : ''}">
            <img src="${image}" alt="${product.item_name}">
        </div>
    `).join('');

    // Thumbnails
    let thumbnailsHTML = product.images.map((img, i) => 
        `<img src="${img}" alt="Thumbnail ${i + 1}" class="${i === 0 ? 'active' : ''}" onclick="changeMainImage(${i})">`
    ).join('');

    // Complete HTML
    const productDetailHTML = `
        <div class="product-detail">
            <div class="product-images">
                <div class="main-image-gallery">${imagesHTML}</div>
                <div class="image-thumbnails">${thumbnailsHTML}</div>
            </div>

            <div class="product-info">
                <div class="product-brand">${product.company}</div>
                <h1 class="product-name">${product.item_name}</h1>

                <div class="product-rating">
                    <div class="stars">★ ${product.rating?.stars || '4.5'}</div>
                    <div class="rating-text">(${product.rating?.count || '100'} Reviews)</div>
                </div>

                <div class="product-price">
                    <span class="current-price">Rs. ${product.current_price}</span>
                    <span class="original-price">Rs. ${product.original_price}</span>
                    <span class="discount">(${product.discount_percentage}% OFF)</span>
                </div>

                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">🛒 Add To Cart</button>
                </div>

                <div class="product-description">
                    <h3>Product Details:</h3>
                    <p>${getProductDescription(product)}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('productDetailContent').innerHTML = productDetailHTML;
    setupProductDetailInteractions();
}

// Add to cart function
function addToCart(productId) {
    const product = items.find(item => item.id === productId);
    if (!product || product.stock === 0) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(i => i.id === product.id);

    if (cartItem) {
        if (cartItem.quantity + 1 > (product.stock || 10)) return;
        cartItem.quantity += 1;
    } else {
        cart.push({
            uniqueId: Date.now() + Math.random(),
            id: product.id,
            name: product.item_name,
            brand: product.company,
            price: product.current_price,
            image: product.images[0],
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    const addBtn = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
    if (addBtn) {
        addBtn.classList.add('bubbled');
        setTimeout(() => addBtn.classList.remove('bubbled'), 400);
    }
}

// Change main image
function changeMainImage(index) {
    const images = document.querySelectorAll('.detail-image');
    const thumbs = document.querySelectorAll('.image-thumbnails img');

    images.forEach(i => i.classList.remove('active'));
    thumbs.forEach(t => t.classList.remove('active'));

    if (images[index]) images[index].classList.add('active');
    if (thumbs[index]) thumbs[index].classList.add('active');
}

// Setup interactions
function setupProductDetailInteractions() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    }
}

// Go back function
function goBack() {
    window.history.back();
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.querySelector('.bag-items');

    if (cartBadge) {
        if (cartCount > 0) {
            cartBadge.textContent = cartCount;
            cartBadge.style.display = 'block';
        } else {
            cartBadge.style.display = 'none';
        }
    }
}

// Initialize on page load
if (window.location.pathname.includes('product.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayProductDetail();
        updateCartCount();
    });
}

// Global functions
window.addToCart = addToCart;
window.changeMainImage = changeMainImage;
window.goBack = goBack;