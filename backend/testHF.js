const { InferenceClient } = require("@huggingface/inference");
require("dotenv").config();

async function main() {
  const client = new InferenceClient(process.env.HF_API_KEY);

  try {
    const result = await client.chatCompletion({
      model: "Qwen/Qwen2.5-7B-Instruct:together",
      messages: [
        {
          role: "user",
          content: "Say only Hello"
        }
      ],
      max_tokens: 10
    });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();