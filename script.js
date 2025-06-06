let scenarioCount = 1;

document.getElementById('simForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  scenarioCount = 1;
  document.getElementById('scenarioBox').classList.remove('hidden');
  await loadScenario();
});

document.getElementById('nextBtn').addEventListener('click', async () => {
  scenarioCount++;
  if (scenarioCount <= 10) {
    await loadScenario();
  } else {
    document.getElementById('scenarioText').textContent = 'Simulation complete! Report coming soon...';
  }
});

async function loadScenario() {
  const job = document.getElementById('job').value;
  const company = document.getElementById('company').value;

  const res = await fetch('/.netlify/functions/generateScenario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ job, company, scenarioNumber: scenarioCount })
  });

  const data = await res.json();
  document.getElementById('scenarioText').textContent = data.scenario || 'Error loading scenario.';
}
