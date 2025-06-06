const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async function (req, res) {
  const { job, company, scenarioNumber } = req.body;

  const prompt = `You are a Simulation Game Master. The user is a ${job} at ${company}. Provide Scenario ${scenarioNumber}:\n\n- A realistic workplace problem with vivid detail\n- 3 decision options (A, B, C)\n- A short consequence of each\n- Reflect ${company}'s culture\n\nKeep it professional and immersive.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({
      scenario: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
