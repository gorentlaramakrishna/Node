const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/RamuDB")
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.log("❌ MongoDB Connection Failed:", err));

// ✅ Correct way to use Schema
const Schema = mongoose.Schema;

const Ramuschema = new Schema({
    id: Number,
    name: String,
    age: Number
});

// ✅ Create Model
const Employee = mongoose.model('Employee', Ramuschema);

// ✅ Insert API
app.post('/insert', async (req, res) => {
    try {
        const newRecord = new Employee({
            id: req.body.id,
            name: req.body.name,
            age: req.body.age
        });

        await newRecord.save();

        res.status(200).json({ message: "Record added successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/fetch', async (req, res) => {
    try {
        const records = await Employee.find();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/update', async (req, res) => {
    try {
        const updatedRecord = await Employee.findOneAndUpdate(
            { id: req.body.id },
            {
                name: req.body.name,    
                age: req.body.age
            },
            { new: true }
        );  
        res.status(200).json(updatedRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/delete', async (req, res) => {
    try {
        const deletedRecord = await Employee.findOneAndDelete({ id: req.body.id });
        res.status(200).json({ message: "Record deleted successfully", record: deletedRecord });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8000, () => {
    console.log('🚀 Server is listening on port 8000');
});
