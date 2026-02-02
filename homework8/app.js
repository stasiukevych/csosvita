let allProducts = [];

async function loadProducts() {
    try {
        const response = await fetch('https://6980dded6570ee87d5109252.mockapi.io/api/products');
        allProducts = await response.json();
        console.log(allProducts);
        render(allProducts);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function render(products) {
    const container = document.getElementById('products');

    container.innerHTML = products.map(product => `
                <li aria-label="food-item">
                    <article class="food__item" aria-label="food-content">
                        <div class="food__image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="food__content">
                            <h3 aria-label="food-name">${product.name}</h3>
                            <p aria-label="food-delivery">${product.availability}</p>
                        </div>
                        <div class="food__price" aria-label="food-price">
                            <span>${product.price}</span>
                            <a href="/discount" aria-label="discount">Get 20% Off in App</a>
                        </div>
                    </article>
                </li>
    `).join('');
}

function filterProducts() {
    const sortBy = document.getElementById('sort-select').value;
    const priceMax = document.getElementById('price-select').value;
    const selectedCategory = document.getElementById('category-select').value;
    const searchText = document.getElementById('search').value.toLowerCase();

    let filtered = [...allProducts];

    filtered = filtered.filter(p => passesFilter(p, searchText, priceMax, selectedCategory));
    filtered = filtered.sort(getProductComparator(sortBy));

    console.log(filtered);
    render(filtered);
}

function passesFilter(product, search, selectedPriceMax, selectedCategory) {
    let matchedBySearch = true;
    let matchedByPriceMax = true;
    let matchedByCategory = true;

    if (search) {
        matchedBySearch = isSearchable(search, product);
    }

    if (selectedPriceMax) {
        matchedByPriceMax = product.price <= selectedPriceMax;
    }

    if (selectedCategory) {
        matchedByCategory = product.category.toLocaleLowerCase() === selectedCategory;
    }

    return matchedBySearch && matchedByPriceMax && matchedByCategory;
}

function getProductComparator(sortBy) {
    if (!sortBy) {
        return (a, b) => a.id - b.id;
    }

    switch (sortBy) {
        case "name":
            return (a, b) => a.name.localeCompare(b.name);
        case "price":
            return (a, b) => a.price - b.price;
        case "category":
            return (a, b) => a.category.localeCompare(b.category);
        default:
            throw new Error(`Unknown sortBy: ${sortBy}`);
    }
}

function isSearchable(search, product) {
    return product.name.toLowerCase().includes(search)
        || product.category.toLowerCase().includes(search)
        || product.availability.toLowerCase().includes(search);
}

// Add event listeners
document.getElementById('search').addEventListener('input', filterProducts);
document.getElementById('sort-select').addEventListener('change', filterProducts);
document.getElementById('price-select').addEventListener('change', filterProducts);
document.getElementById('category-select').addEventListener('change', filterProducts);

// Load products on page load
loadProducts()
    .catch(error => {
        console.error('Failed to load products:', error);
        document.getElementById('products').innerHTML = '<p>Failed to load products. Please refresh the page.</p>';
    });