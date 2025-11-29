// ✅ Function to update cart count
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

// ✅ Update cart count and display items when page loads
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    displayItemsOnHomePage();
    setupSearchBar();
});

// ✅ Function to go to product page
function openItemPage(itemId) {
    window.location.href = `pages/product.html?id=${itemId}`;
}

// ✅ Display items on home page (WISHLIST removed)
function displayItemsOnHomePage(filteredItems) {
    const mainContainer = document.querySelector('.main-container');
    if (!mainContainer) return;

    let innerHTML = '';
    const displayItems = filteredItems || items;

    displayItems.forEach((item) => {

        // Indicators
        let indicatorsHTML = '';
        item.images.forEach((img, i) => {
            indicatorsHTML += `<li data-index="${i}" class="${i === 0 ? 'active' : ''}"></li>`;
        });

        const extendedImages = [...item.images, item.images[0]];

        // Stock Display
        let stockDisplay = '';
        if (item.stock > 0) {
            stockDisplay = `<div class="out-of-stock">Available: ${item.stock}</div>`;
        } else {
            stockDisplay = `<div class="out-of-stock" style="color:red; font-weight:bold;">Out of Stock</div>`;
        }

        innerHTML += `
      <div class="item-container" onclick="openItemPage('${item.id}')">
        
        <div class="slider">
          <div class="slide-wrapper">
            ${extendedImages.map(img => `<img class="img-card" src="${img}" alt="${item.item_name}">`).join('')}
          </div>
        </div>

        <div class="indicater"><ul>${indicatorsHTML}</ul></div>

        <div class="rating-main">
          <span class="star-count">${item.rating.stars}</span>
          <span class="star">★</span>
          <span class="views">| ${item.rating.count}</span>
        </div>

        <div class="item-detail">
          <div class="brand">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          ${stockDisplay}
        </div>

        <div class="price-container">
          <span class="price-now">Rs. ${item.current_price}</span>
          <span class="price-was">Rs. ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>

      </div>
    `;
    });

    mainContainer.innerHTML = innerHTML;
    setupSliders();
}

// ✅ Slider function
function setupSliders() {
    const containers = document.querySelectorAll('.item-container');

    containers.forEach((container) => {
        const slideWrapper = container.querySelector('.slide-wrapper');
        const images = container.querySelectorAll('.slide-wrapper img');
        const indicators = container.querySelectorAll('.indicater li');
        let currentIndex = 0;
        let interval;

        function showNextImage() {
            currentIndex++;
            slideWrapper.style.transition = "transform 0.5s ease-in-out";
            slideWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

            if (currentIndex === images.length - 1) {
                setTimeout(() => {
                    slideWrapper.style.transition = "none";
                    slideWrapper.style.transform = "translateX(0%)";
                    currentIndex = 0;
                }, 500);
            }

            indicators.forEach(dot => dot.classList.remove('active'));
            indicators[currentIndex % indicators.length].classList.add('active');
        }

        container.addEventListener('mouseenter', () => {
            if (images.length > 1) interval = setInterval(showNextImage, 1500);
        });

        container.addEventListener('mouseleave', () => {
            clearInterval(interval);
            slideWrapper.style.transition = "none";
            slideWrapper.style.transform = "translateX(0%)";
            currentIndex = 0;
            indicators.forEach(dot => dot.classList.remove('active'));
            indicators[0].classList.add('active');
        });
    });
}

// ✅ Check stock before adding product to cart
function addToCart(itemId, quantity) {
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(i => i.id === itemId);

    if (quantity > item.stock) {
        alert('This product is not available in stock');
        return;
    }

    if (cartItem) {
        const newQuantity = cartItem.quantity + quantity;
        if (newQuantity > item.stock) {
            alert('Cannot add more than available stock');
            return;
        }
        cartItem.quantity = newQuantity;
    } else {
        cart.push({ id: item.id, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// ✅ Function to place order
function placeOrder() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Cart is empty');
        return;
    }

    cart.forEach(cartItem => {
        const item = items.find(i => i.id === cartItem.id);
        if (item) {
            item.stock -= cartItem.quantity;
            if (item.stock < 0) item.stock = 0;
        }
    });

    alert('Order placed successfully');

    localStorage.removeItem('cart');
    updateCartCount();

    displayItemsOnHomePage();
}

// ✅ Search bar function
function setupSearchBar() {
    const searchInput = document.querySelector('.search_input');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredItems = items.filter(item =>
            item.item_name.toLowerCase().includes(query) ||
            item.company.toLowerCase().includes(query)
        );
        displayItemsOnHomePage(filteredItems);
    });
}

// Global functions
window.openItemPage = openItemPage;
window.addToCart = addToCart;
window.placeOrder = placeOrder;