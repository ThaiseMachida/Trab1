module.exports = (app) => {
  const multer = require("multer");
  const fs = require("fs");
  var path = require("path");

  const lojas = require("../controllers/comentarios.controller");
  var router = require("express").Router();

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/comentarios");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    },
  });

  const upload = multer({
    storage: storage,
  });

  router.post("/upload/", upload.single("file"), async (req, res) => {
    res.send({
      upload: true,
      file: req.file,
    });
  });

  router.get("/upload/:arquivo", (req, res) => {
    const arquivo =
      path.dirname(__dirname) + `/uploads/comentarios/${req.params.arquivo}`;
    console.log("dir: " + arquivo);
    fs.readFile(arquivo, function (err, data) {
      res.contentType("png");
      res.send(data);
    });
  });

  router.post("/", comentarios.create);
  router.get("/", comentarios.findAll);
  router.get("/:id", comentarios.findOne);
  router.put("/:id", comentarios.update);
  router.delete("/:id", comentarios.delete);
  router.delete("/", comentarios.deleteAll);

  app.use("/comentarios", router);
};
