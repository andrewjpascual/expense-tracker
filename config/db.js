const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // this will return a promise
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

// need to export for usage
module.exports = connectDB;
