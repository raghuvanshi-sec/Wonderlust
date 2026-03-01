if(process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: require('path').resolve(__dirname, '../.env') });
}
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const DB_URL = process.env.DB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(DB_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Sample data inserted");
};

initDB();

