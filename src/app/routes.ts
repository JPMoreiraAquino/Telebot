import express from "express";
import bot from "./app";

const routes = express.Router();

routes.get('/:message', (req, res) => {
  const { message } = req.params;
  
  bot.on('text', (ctx) => ctx.reply(message));

  res.status(200).json({
    code: 200,
    message
  })
})
export default routes;