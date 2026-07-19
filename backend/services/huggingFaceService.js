const { InferenceClient } = require("@huggingface/inference");
console.log(process.env.HF_API_KEY);
const client = new InferenceClient(process.env.HF_API_KEY);

const analyzeReview = async (review) => {

   const prompt = `
You are an AI assistant for a hotel review analytics platform.

Review:

"${review}"

Return ONLY JSON.

Example:

{
"sentiment":"Positive",

"positive":[
"Friendly staff",
"Clean room"
],

"negative":[
"Slow Wi-Fi"
],

"response":"Thank you for your valuable feedback. We are delighted that you enjoyed your stay and appreciated our friendly staff and clean rooms. We also regret the inconvenience caused by the slow Wi-Fi. Your feedback has been shared with our team, and we are working to improve this service. We hope to welcome you again soon.",

"suggestions":[
"Upgrade Wi-Fi",
"Continue staff training"
]
}

Now generate JSON for the given review.

Return ONLY JSON.
`;

    const chatCompletion = await client.chatCompletion({

        model: "Qwen/Qwen2.5-7B-Instruct:together",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ],

        max_tokens: 300,
        temperature: 0.4

    });

    const text = chatCompletion.choices[0].message.content.trim();

return JSON.parse(text);

};

module.exports = {
    analyzeReview
};