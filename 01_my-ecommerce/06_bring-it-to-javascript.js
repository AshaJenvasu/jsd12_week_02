//MangaHub Thailand Business Entities

//string for product name
const productName = 'One piece เล่ม 1';

//number for price
const price = 75;

//boolean for inStock
const inStock = true;

//array for list of products
const products = [
  {
    productId: 1,
    name: 'One piece เล่ม 1',
    price: 75,
    inStock: true,
  },
  {
    productId: 2,
    name: 'The Seven Deadly Sins เล่ม 8',
    price: 75,
    inStock: true,
  },
  {
    productId: 3,
    name: 'Attack on Titan เล่ม 1',
    price: 89,
    inStock: true,
  },
];

//object for one order
const order = {
  orderId: 'OP-001',
  userId: 101,
  totalPrice: 239,
  status: 'shipped',
  createdAt: '2026-03-10',
};

//array of objects for shopping cart
const cart = [
  {
    productId: 1,
    name: 'One Piece เล่ม 1',
    price: 75,
    quantity: 2,
  },
  { productId: 3, name: 'Attack on Titan เล่ม 1', price: 89, quantity: 1 },
];

console.log('Manga: ', productName);
console.log('Price: ', price);
console.log('inStock: ', inStock);
console.log('ShonenManga: ', products);
console.log('Order: ', order);
console.log('Cart: ', cart);
