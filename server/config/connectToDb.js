const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect("mongodb+srv://steo697:stefano123@cluster0.robyeiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Conneced to database");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDb;