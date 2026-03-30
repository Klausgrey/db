const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

const expenseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	amount: { type: Number, required: true },
	category: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const Expense = mongoose.model("Expense", expenseSchema);

app.post("/expenses", async (req, res) => {
	const { title, amount, category } = req.body;

	try {
		await Expense.create({ title, amount, category });
	} catch (err) {
		return res.json({ err });
	}

	res.json({ messages: "Creates successfully" });
});

app.get("/expenses", async (req, res) => {
	try {
		const result = await Expense.find();
		res.json({ result });
	} catch (err) {
		return res.json({ err });
	}
});

app.get("/expenses/summary", async (req, res) => {
	try {
		const byCategory = await Expense.aggregate([
			{
				$group: {
					_id: "$category",
					total: { $sum: "$amount" },
				},
			},
		]);
		const grandTotal = await Expense.aggregate([
			{
				$group: {
					_id: null,
					total: { $sum: "$amount" },
				},
			},
		]);
		res.json({ byCategory, grandTotal });
	} catch (err) {
		return res.json({ err });
	}
});

app.listen(3000, () => console.log("running"));
