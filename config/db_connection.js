//Mongodb connection
const config = require("config");
const mongoose = require("mongoose");
const MONGODB_URI = config.get("MONGO_URI");

const connectingDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("yay mongodb connected :)");
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectingDB;
