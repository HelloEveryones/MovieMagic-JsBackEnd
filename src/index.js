import express from "express";
import handlebars from "express-handlebars";

import homeController from "./controllers/homeController.js"
import routes from "./routes.js"

const app = express();

app.engine( 
  "hbs",
  handlebars.engine({
    extname: "hbs", 
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");





app.use('/static', express.static('src/public'));
app.use(homeController);
app.use(routes)


app.listen(5000, () =>
  console.log("Server is listening on http://localhost:5000...")
);
