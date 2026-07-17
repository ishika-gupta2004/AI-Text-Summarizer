const axios = require("axios");
const callAI = require("../services/aiService")

const summarizeText = async (req, res) => {
    try {

        const { text } = req.body;
        const prompt = `Summarize the following text in only 3 lines:${text}`;

        const summary = await callAI(prompt);

        res.json({
            success: true,
            summary,
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });

    }

};

// email

const generateEmail = async (req, res) => {

    try {

        const { recipient, reason, tone } = req.body;

        const prompt = `
                    Write a ${tone} email.
                    Recipient: ${recipient}
                    Reason: ${reason}
                    Generate only the email.
`;

        const email = await callAI(prompt);

        res.json({
            success: true,
            email,
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Email generation failed",
        });

    }

};

module.exports = {
    summarizeText, generateEmail
};