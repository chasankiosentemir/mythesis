import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Chasan',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },

        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{
        name: 'Dolce and Gabbana Trouser',
        category: 'Trouser',
        image: '/images/product-1.jpg',
        price: 120,
        countInStock:10,
        brand: 'Dolce and Gabbana',
        rating: 4.5,
        numReviews: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }, 
    {
        name: 'Dolce and Gabbana Shirt',
        category: 'Trouser',
        image: '/images/product-2.jpg',
        price: 120,
        countInStock:20,
        brand: 'Dolce and Gabbana',
        rating: 4.5,
        numReviews: 10,
        description:'100% Cotton'

    }, 
    {
        name: 'Adidas Trouser',
        category: 'Trouser',
        image: '/images/product-1.jpg',
        price: 120,
        countInStock:0,
        brand: 'Dolce and Gabbana',
        rating: 4.5,
        numReviews: 10,
        description:'100% Cotton'

    }, 
    {
        name: 'Nike Trouser',
        category: 'Trouser',
        image: '/images/product-4.jpg',
        price: 120,
        countInStock:10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description:'100% Cotton'

    }, 
    {
        name: 'Trussardi Trouser',
        category: 'Shirt',
        image: '/images/product-5.jpg',
        price: 120,
        countInStock:0,
        brand: 'Dolce and Gabbana',
        rating: 4.5,
        numReviews: 1001,
        description:'100% Cotton'

    }, 
    {
        name: 'Nike Shirt',
        category: 'Trouser',
        image: '/images/product-6.jpg',
        price: 0,
        countInStock:15,
        brand: 'Dolce and Gabbana',
        rating: 4.5,
        numReviews: 15,
        description:'100% Cotton'

    }, 
   ],
};

export default data;