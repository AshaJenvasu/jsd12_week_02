# MangaHub Thailand Project Context

This project (jsd12 Week 02) is a structured learning repository focused on designing and prototyping an e-commerce platform for manga, named **MangaHub Thailand**. It covers everything from business requirements to database design and basic JavaScript data structures.

## Project Overview

**MangaHub Thailand** is a specialized e-commerce platform for physical manga and ebooks. It addresses key pain points like market fragmentation, limited access for budget-conscious readers (students), and poor purchasing experiences (scalping, lack of notifications).

- **Main Technologies:**
  - **Documentation:** Markdown (`.md`)
  - **Visual Design:** Excalidraw for diagrams (BMC, Use Case, ERD)
  - **Database:** PostgreSQL (Learning exercises for a restaurant system)
  - **Logic Prototype:** JavaScript (`.js`) and HTML (`.html`)

## Key Files & Directory Structure

### 1. Project Documentation & Design
- **`01_my-ecommerce.md`**: Problem statement and proposed solutions for MangaHub.
- **`05_product-backlog.md`**: Comprehensive list of user stories for both regular users and administrators.
- **Visual Diagrams (Excalidraw):**
  - `02_business-model-canvas.excalidraw`: Business model strategy.
  - `03_use-case-diagram.excalidraw`: System functionalities and actor interactions.
  - `04_er-diagram.excalidraw`: Entity-Relationship model for the database.

### 2. Prototypes
- **`06_bring-it-to-javascript.js`**: Initial JavaScript data models for products, orders, and shopping carts.
- **`07_bring-it-to-javascript.html`**: A simple HTML container for the JavaScript logic.

### 3. PostgreSQL Database (Exercise)
Located in the `postgresql/` directory, these files implement a restaurant/inventory management system as a hands-on learning exercise:
- `create-tables.sql`: Schema definition for Suppliers, Staff, Ingredients, MenuItems, and Orders.
- `01_suppliers.sql` to `07_order_items.sql`: Data population scripts.
- `Exercise/`: SQL query exercises (e.g., `Exercise_01.sql`).

## Usage & Development
- **Database:** Use the scripts in `postgresql/` to set up and practice SQL queries in a PostgreSQL environment.
- **JavaScript:** Run `node 06_bring-it-to-javascript.js` to see the console output of the initial data structures.
- **Diagrams:** Open the `.excalidraw` files in [Excalidraw](https://excalidraw.com/) for visual editing.
