const _ = require('underscore');

const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 500,
        category: 'Laptops',
    },
    {
        id: 2,
        title: 'Product 2',
        price: 100,
        category: 'Smartphones',
    },
    {
        id: 3,
        title: 'Product 3',
        price: 200,
        category: 'Monitors',
    },
    {
        id: 4,
        title: 'Product 4',
        price: 50,
        category: 'Laptops',
    },
    {
        id: 5,
        title: 'Product 5',
        price: 500,
        category: 'Monitors',
    },
    {
        id: 6,
        title: 'Product 6',
        price: 400,
        category: 'Smartphones',
    },
    {
        id: 7,
        title: 'Product 7',
        price: 800,
        category: 'Smartphones',
    }
];

const groupedProductsByCategory = _.groupBy(products, 'category');

for (const categoryName in groupedProductsByCategory) {
    const categoryProducts = groupedProductsByCategory[categoryName];
    const count = categoryProducts.length;
    const minPrice = _.min(categoryProducts, (p) => p.price ).price;
    const maxPrice = _.max(categoryProducts, (p) => p.price ).price;

    console.log(`Category: ${categoryName} has ${count} products from ${minPrice} to ${maxPrice}`);
    
}

// console.log(groupedData);