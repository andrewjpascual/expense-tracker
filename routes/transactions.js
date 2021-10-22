const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransaction,
} = require("../controllers/transaction_controller");

// represents the app.use('api/v1/transactions')
router.route("/").get(getTransactions).post(addTransactions);

// delete route needs an ID
router.route("/:id").delete(deleteTransaction);

module.exports = router;
