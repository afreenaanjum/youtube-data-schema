const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const analyticsSubCollectionSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  cancelledOrders: {
    type: Number,
  },
  completedOrders: {
    type: Number,
  },
  day: {
    type: Number,
    maxlength: 2,
  },
  expenses: { type: Number },
  month: {
    type: Number,
    maxlength: 2,
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
  salesOverDue: {
    type: Number,
  },
  totalCostPrice: {
    type: Number,
  },
  totalCustomers: {
    type: Number,
  },
  totalOrders: {
    type: Number,
  },
  totalSales: {
    type: Number,
  },
  totalSmsSent: {
    type: Number,
  },
  year: {
    type: Number,
    maxlength: 4,
    minlength: 4,
  },
  updatedOn: {
    type: Date,
    default: Date.now(),
  },
});

const AnalysticsSubCollectionSchema = analyticsSubCollectionSchema;

module.exports = {
  AnalysticsSubCollectionSchema,
};
