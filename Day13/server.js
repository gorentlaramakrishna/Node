const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

// Connect only once
async function startServer() {
    try {
        await client.connect();
        console.log("✅ MongoDB Connected");

        db = client.db("RamuDBB");

        app.listen(8000, () => {
            console.log("🚀 Server running on port 8000");
        });

    } catch (err) {
        console.log("❌ DB Connection Failed", err);
    }
}

startServer();


// GET all products
app.get('/', async (req, res) => {
    try {
        const result = await db.collection("products").find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// INSERT product
app.post('/insert', async (req, res) => {
    try {
        const result = await db.collection("products").insertOne({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        });

        res.json({ message: "Inserted successfully", result });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
