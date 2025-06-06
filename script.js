document.getElementById('careerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const job = document.getElementById('job').value;
  const company = document.getElementById('company').value;

  const response = await fetch('https://job-simulation.onrender.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ job, company }),
  });

  const data = await response.json();
  console.log('API Response:', data); // 🔍 Add this for debugging

  document.getElementById('scenario').innerText = data.scenario || 'Error loading scenario.';
});

