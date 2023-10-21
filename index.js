//import express
import express from "express";

//import router
import Router  from "./routes/routes.js";

//init express
const app = express();

app.use(Router);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));