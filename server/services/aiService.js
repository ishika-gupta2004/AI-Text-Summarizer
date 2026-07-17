const axios = require("axios");

const callAI = async (prompt) => {
    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
        {
            model: "openrouter/free",

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ]
        },
        {
            headers:{
                 Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            }
        }
    )   
    return response.data.choices[0].message.content;
}

module.exports = callAI;