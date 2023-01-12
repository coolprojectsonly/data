const { Configuration, OpenAIApi } = require("openai");

const dotenv = require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function nnn(req, res) {
  if (req.method === "POST") {
    const inputs = req.body.InputsData;

    try {
      const response = await openai.createImage({
        prompt: inputs.input,
        n: 1,
        size: inputs.select,
      });
      const imageUrl = response.data.data[0];

      res.status(200).json({ suceess: true, imgUrl: imageUrl });
    } catch (err) {
      res.status(400).json({ error: err });
      
    }
  }
}

export default nnn;
