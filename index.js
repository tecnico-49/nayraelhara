require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAIApi, Configuration } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/oraculo', async (req, res) => {
  const pregunta = req.body.pregunta;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Eres un oráculo espiritual, místico y lleno de sabiduría ancestral. Responde con mensajes profundos, mágicos y breves, como si canalizaras energías del universo.',
        },
        {
          role: 'user',
          content: pregunta,
        },
      ],
      temperature: 0.9,
      max_tokens: 100,
    });

    const respuesta = completion.data.choices[0].message.content;
    res.json({ respuesta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al consultar el oráculo.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor del Oráculo corriendo en http://localhost:${PORT}`));
