const express = require("express");
const { persone } = require("../persone");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: persone });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const persona = persone.find((persona) => persona.id === id);
  res.json({ success: true, data: persona });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({ success: true, data: persone });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const persona = req.body;
  persone[Number(id) - 1] = persona;
  res.status(200).json({ success: true, data: persone });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const idx = persone.findIndex((persona) => persona.id === id);
  persone.splice(idx, 1);
  res.status(200).json({ success: true, data: persone });
});

module.exports = router;
