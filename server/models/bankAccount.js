const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
    name: String,
    balance: Number
});

const BankAccount = mongoose.model("BankAccount", bankAccountSchema);

module.exports = BankAccount;