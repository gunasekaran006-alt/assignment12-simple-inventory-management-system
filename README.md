# 📦 Simple Inventory Management System (IMS) API

## 📝 Project Description
The **Simple Inventory Management System** is a lightweight backend API built using **Node.js** and **Express.js**. This application helps businesses manage their product inventory efficiently. Instead of using a traditional database, this system utilizes a local **JSON file (`products.json`)** to store, read, update, and delete product data, acting as a mock database. 

This project demonstrates the core concepts of RESTful API development, handling CRUD (Create, Read, Update, Delete) operations, and working with the Node.js File System (`fs`) module.

---

## 🚀 Features Implemented
* **Read (GET):** Fetch and display all available products in the inventory.
* **Create (POST):** Add new products to the inventory list dynamically.
* **Delete (DELETE):** Remove specific products from the inventory using their unique `productId`.
* **Update (PUT):** Modify the details (like description) of an existing product.
* **Persistent Storage:** All changes made via API endpoints are permanently saved in the `products.json` file.

---

## 🛠️ Technology Stack
* **Backend Framework:** Express.js
* **Runtime Environment:** Node.js
* **Data Storage:** Local JSON file (`products.json`)
* **Development Tool:** Nodemon (for automatic server restarts)
* **API Testing Tool:** Postman / ThunderClient

---

## ⚙️ Installation and Setup

Follow these step-by-step instructions to run the project locally:

1. **Clone the Repository:**
```bash
   git clone <your-github-repo-link>
   cd <your-folder-name>