const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const { AnalysticsSubCollectionSchema } = require("./analyticsSubCollection");

const analyticsSchema = new Schema({
  _id: { type: String, required: true },
  cancelledOrders: {
    type: Number,
  },
  completedOrders: {
    type: Number,
  },
  documentAddedOn: {
    type: Date,
    default: Date.now(),
  },
  documentUpdatedOn: {
    type: Date,
  },
  expenses: {
    type: Number,
  },
  lastCustomerAddedOn: {
    type: Date,
  },
  lastExpenseAddedOn: {
    type: Date,
  },
  lastOrderAddedOn: {
    type: Date,
  },
  lastStoreItemAddedOn: {
    type: Date,
  },
  lowStockCount: {
    type: Number,
  },
  paymentDueOrders: {
    type: Number,
  },
  pendingOrders: {
    type: Number,
  },
  pendingSales: {
    type: Number,
  },
  profit: {
    type: Number,
  },
  salesOverdue: {
    type: Number,
  },
  totalCostPrice: {
    type: Number,
  },
  totalCustomers: { type: Number },
  totalOrders: { type: Number },
  totalSales: { type: Number },
  totalSmsSent: { type: Number },
  totalStoreItems: { type: Number },
  days: [AnalysticsSubCollectionSchema],
  monthAndYear: [AnalysticsSubCollectionSchema],
});

const Analytics = mongoose.model("Analytics", analyticsSchema);

module.exports = {
  Analytics,
};
