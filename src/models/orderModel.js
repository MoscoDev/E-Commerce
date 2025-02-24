const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
   userId: { type: String, required: [true, "Input a valid userId"] },

    products: [
      {
        productId: {
          productId: {
            userId: { type: String, required: true },
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    },
    ],

    price: { type: Number,
      required: true },


    totalAmount: {
              type: Number,
              required: true},

    address: { type: Object,
               required: true },

    status: { type: String, 
              default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);