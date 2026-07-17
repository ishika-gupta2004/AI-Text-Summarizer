const express = require ('express');
const router = express.Router();

const {summarizeText , generateEmail} = require ("../controllers/aiController");

router.post("/summarize", summarizeText);
router.post("/email", generateEmail);
module.exports = router;