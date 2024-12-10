const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");

// Route pour récupérer toutes les offres
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route pour créer une nouvelle offre
router.post("/", async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const savedOffer = await offer.save();
    res.status(201).json(savedOffer);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
