document.getElementById('careerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const job = document.getElementById('job').value;
  const company = document.getElementById('company').value;

  try {
    const response = await fetch('https://job-simulation.onrender.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ job, company }),
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (data && data.scenario) {
      document.getElementById('scenario').innerText = data.scenario;
    } else {
      document.getElementById('scenario').innerText = 'Unexpected response format.';
    }
  } catch (error) {
    console.error('Error fetching scenario:', error);
    document.getElementById('scenario').innerText = 'Failed to fetch scenario. Please try again later.';
  }
});

