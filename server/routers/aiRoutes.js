const express = require ('express');
const router = express.Router();

const {summarizeText} = require ("../controllers/aiController");

router.post("/summarize", summarizeText);
module.exports = router;