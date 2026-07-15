const axios = require("axios");

const summarizeText = async (req, res) => {
    try {
        const { text } = req.body;

        // Send request to OpenRouter
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",

            // DATA
            {
                model: "openrouter/free",
                messages: [
                    {
                        role: "user",
                        content: `Summarize the following text in only 3 lines:

                            ${text}`,
                    },
                ],
            },

            // CONFIG
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // Get AI response
        const summary = response.data.choices[0].message.content;

        // Send summary to client
        res.status(200).json({
            success: true,
            summary,
        });

    } catch (error) {
        console.log("Error:", error.response?.data || error.message);

        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.response?.data || error.message,
        });
    }
};

module.exports = {
    summarizeText,
};