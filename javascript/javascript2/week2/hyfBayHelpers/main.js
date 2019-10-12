console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

const searchProduct = document.querySelector('div.search input');
searchProduct.addEventListener('input', requiredProducts);

function requiredProducts(){
    const searchProduct = document.querySelector('input');
    const filteredProduct = products.filter (product =>
        product.name.toLowerCase().includes(searchProduct.value.toLowerCase()));

    renderProducts(filteredProduct);
}