const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
require("mongoose-currency").loadType(Mongoose);
const Currency = Mongoose.Types.Currency;
const PromoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    default: "",
  },
  price: {
    type: Currency,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

var Promo = Mongoose.model("Promo", PromoSchema);

module.exports = Promo;
