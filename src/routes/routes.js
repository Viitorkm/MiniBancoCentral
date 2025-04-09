const { Router } = require("express");

const router = Router();

router.get("/hello", (req, res) => {
  res.send("Teste de importação");
});

module.exports = router;
