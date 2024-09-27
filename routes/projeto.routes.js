module.exports = (app) => {
  const produtos = require("../controllers/projeto.controller");
  var router = require("express").Router();

  router.post("/", projeto.create);
  router.get("/", projeto.findAll);
  router.get("/:id", projeto.findOne);
  router.put("/:id", projeto.update);
  router.delete("/:id", projeto.delete);
  router.delete("/", projeto.deleteAll);

  app.use("/projeto", router);
};
