import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  const { job, company, scenarioNumber } = JSON.parse(event.body);

  const prompt = `You are a Simulation Game Master. The user is a ${job} at ${company}. Provide Scenario ${scenarioNumber}:\n\n- A realistic workplace problem with vivid detail\n- 3 decision options (A, B, C)\n- A short consequence of each\n- Reflect ${company}'s culture\n\nKeep it professional and immersive.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        scenario: completion.choices[0].message.content,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

