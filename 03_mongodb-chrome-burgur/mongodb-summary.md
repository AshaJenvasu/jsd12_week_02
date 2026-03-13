# Chrome Burger MongoDB Summary

This directory contains MongoDB scripts for the **Chrome Burger** restaurant management system. The system uses a document-oriented approach with a mix of embedding and referencing.

## Database
- **Name**: `chrome_burger`

## Collections & Data Models

### 1. Suppliers (`01_suppliers.mongodb.js`)
Stores information about the vendors providing ingredients.
- **Fields**: `_id`, `name`, `contact_person`, `phone_number`.

### 2. Staff (`02_staff.mongodb.js`)
Stores details of the employees.
- **Fields**: `_id`, `first_name`, `last_name`, `role` (e.g., Cashier, Cook).

### 3. Ingredients (`03_ingredients.mongodb.js`)
Manages inventory levels and links to suppliers.
- **Fields**: `_id`, `name`, `stock_level`, `unit`, `supplier_id` (Reference to `suppliers`).
- **Operations**: Includes an aggregation with `$lookup` to join supplier details.

### 4. Menu Items (`04_menu_items.mongodb.js`)
Defines the products sold, with embedded recipe information.
- **Fields**: `_id`, `name`, `description`, `price`, `category`, `recipe` (Array of embedded objects).
- **Embedded Recipe**: `ingredient_id` (Reference), `quantity_needed`.

### 5. Orders (`05_orders.mongodb.js`)
Records customer transactions with embedded and denormalized item data for performance.
- **Fields**: `_id`, `order_date`, `total_price`, `staff_id` (Reference), `items` (Array of embedded objects).
- **Embedded Items**: `menu_item_id`, `name` (denormalized), `price` (denormalized), `quantity`.
- **Operations**: Includes an aggregation with `$lookup` to join staff details.

## Key Design Patterns
- **Embedding**: Used for recipes within menu items and items within orders to reduce the need for joins during frequent read operations.
- **Referencing**: Used for linking ingredients to suppliers and orders to staff where data is more independent.
- **Denormalization**: Storing `name` and `price` in order items to preserve the historical state of the order even if the menu item changes later.
