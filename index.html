<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Career Simulator</title>
</head>
<body>
  <div class="container">
    <h1>Career Simulator</h1>
    <label for="job">Job Title:</label>
    <input type="text" id="job" placeholder="e.g., Marketing Manager">

    <label for="company">Company:</label>
    <input type="text" id="company" placeholder="e.g., Tech Inc.">

    <button id="startBtn">Start Simulation</button>

    <div id="scenario"></div>
  </div>

  <script>
    document.getElementById('startBtn').addEventListener('click', async function (event) {
      event.preventDefault();

      const job = document.getElementById('job').value.trim();
      const company = document.getElementById('company').value.trim();
      const scenarioDiv = document.getElementById('scenario');

      if (!job || !company) {
        scenarioDiv.textContent = 'Please fill out both fields.';
        return;
      }

      console.log('Sending:', { job, company });
      scenarioDiv.textContent = 'Loading...';

      try {
        const response = await fetch('https://job-simulation.onrender.com/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ job: job, company: company })
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received:', data);
        scenarioDiv.textContent = data.scenario || 'No scenario returned.';
      } catch (error) {
        console.error('Fetch error:', error);
        scenarioDiv.textContent = 'Failed to load scenario. ' + error.message;
      }
    });
  </script>
</body>
</html>
