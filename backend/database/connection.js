const mongoose = require("mongoose");

const mongooseConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log(`MongoDB connectection established successfully!`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

module.exports = mongooseConnection;
