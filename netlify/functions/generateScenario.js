const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function (event, context) {
  const { job, company, scenarioNumber } = JSON.parse(event.body);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `You are a Simulation Game Master. The user is a ${job} at ${company}. Provide Scenario ${scenarioNumber}:\n\n- A realistic workplace problem with vivid detail\n- 3 decision options (A, B, C)\n- A short consequence of each\n- Reflect ${company}'s culture\n\nKeep it professional and immersive.`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        scenario: completion.data.choices[0].message.content,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
