const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse incoming JSON data from req.body
app.use(express.json());

const PORT = 8080;
const DATA_FILE = './products.json';

// Helper function to read data from products.json
const readData = () => {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
};

// Helper function to write data into products.json
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
};

// 1. GET Method: Display all products
app.get('/getProducts', (req, res) => {
    try {
        const products = readData();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error reading products data" });
    }
});

// 2. POST Method: Add a new product
app.post('/addProduct', (req, res) => {
    try {
        const { productId, productName, description, Stock } = req.body;
        const products = readData();

        // Adding new product to the array
        const newProduct = { productId, productName, description, Stock };
        products.push(newProduct);

        writeData(products); // Saving the updated array
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
});

// 3. DELETE Method: Delete a product by ID
// Using req.params to get the productId
app.delete('/deleteProduct/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        let products = readData();

        // Filtering out the product that matches the ID
        const updatedProducts = products.filter(p => p.productId !== productId);

        writeData(updatedProducts);
        res.status(200).json({ message: `Product with ID ${productId} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product" });
    }
});

// 4. UPDATE Method: Update the description of a product
// Using req.params for ID and req.body for new description
app.put('/updateProduct/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const { description } = req.body;
        let products = readData();

        // Mapping through products to find and update the specific product
        products = products.map(p => {
            if (p.productId === productId) {
                p.description = description;
            }
            return p;
        });

        writeData(products);
        res.status(200).json({ message: `Product with ID ${productId} description updated successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error updating product" });
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});