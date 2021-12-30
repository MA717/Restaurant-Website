const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
require("mongoose-currency").loadType(Mongoose);
const Currency = Mongoose.Types.Currency;
const LeaderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    default: "",
  },
  abbr: {
    type: String,
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

var leader = Mongoose.model("leader", LeaderSchema);

module.exports = leader;
