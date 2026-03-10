// ============================================
// MangaHub Thailand — Business Entities
// ============================================

// 1. STRING — product name
const productName = 'One Piece เล่ม 1';

// 2. NUMBER — price
const price = 75;

// 3. BOOLEAN — in stock?
const inStock = true;

// 4. OBJECT — one product
const product = {
  id: 1,
  name: 'One Piece เล่ม 1',
  price: 75,
  genre: 'Shonen',
  publisher: 'Siam Inter',
  inStock: true,
  isDigital: false,
};

// 5. ARRAY — list of products
const products = [
  { id: 1, name: 'One Piece เล่ม 1', price: 75, inStock: true },
  { id: 2, name: 'Naruto เล่ม 5', price: 75, inStock: false },
  { id: 3, name: 'Attack on Titan เล่ม 1', price: 89, inStock: true },
];

// 6. OBJECT — one user
const user = {
  id: 101,
  name: 'Fern',
  email: 'fern@email.com',
  isSubscriber: true,
  loyaltyPoints: 320,
};

// 7. OBJECT — one order
const order = {
  orderId: 'ORD-2024-001',
  user: user,
  items: [
    { product: products[0], quantity: 2 },
    { product: products[2], quantity: 1 },
  ],
  totalPrice: 239,
  status: 'shipped',
  createdAt: '2024-03-10',
};

// 8. ARRAY OF OBJECTS — shopping cart
const cart = [
  { product: products[0], quantity: 2 },
  { product: products[2], quantity: 1 },
];

// ---- Quick Test ----
console.log('Product Name :', productName);
console.log('Price        :', price);
console.log('In Stock     :', inStock);
console.log('Product      :', product);
console.log('All Products :', products);
console.log('User         :', user);
console.log('Order        :', order);
console.log('Cart         :', cart);
