
import express from "express";
import  logger   from "./config/logger";
import routes from "./routes"

const app = express();

app.use(routes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info('Bot is running');
})

