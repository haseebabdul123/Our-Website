require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/auth-route");
const cors = require("cors")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./routes/contact-route");
const adminRoute = require("./routes/admin-route")


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // If you are using cookies
}));

app.use(express.json())
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/admin" , adminRoute)
app.use(errorMiddleware)
const PORT = 5000;

connectDb().then(() => {

  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});