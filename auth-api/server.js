// 🌿 Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

// 🛠️ Core Imports
const app = require('./app'); // 🎯 Express app setup
const connectDB = require('./src/config/db'); // 🔌 MongoDB connection

// 🌐 Define the server PORT
const PORT = process.env.PORT || 5000;

// 🔗 Connect to the Database
connectDB();

// 🚀 Start the Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
