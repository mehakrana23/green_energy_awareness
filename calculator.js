// Show the appropriate section when a tab is clicked
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
  
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    document.getElementById(sectionId).classList.add('active');
    const activeTab = [...tabs].find(tab => tab.getAttribute('onclick').includes(sectionId));
    activeTab.classList.add('active');
  }
  
  // Water Usage Calculation
  function calculateWater() {
    const showerTime = parseInt(document.getElementById('shower-time').value) || 0;
    const plantsWater = parseInt(document.getElementById('plants-water').value) || 0;
  
    const totalWaterUsed = (showerTime * 10) + (plantsWater * 4); // Simplified formula
    document.getElementById('water-tip').textContent = You used ${totalWaterUsed} liters of water. Consider reducing shower time for sustainability.;
  
    // Display chart (example data)
    const ctx = document.getElementById('waterChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Shower', 'Plants'],
        datasets: [{
          label: 'Water Usage (liters)',
          data: [showerTime * 10, plantsWater * 4],
          backgroundColor: ['#4CAF50', '#45a049'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Water Usage Breakdown' }
        }
      }
    });
  }
  
  // Tree Cutting Impact
  function calculateTreeCutting() {
    const treesCut = parseInt(document.getElementById('trees-cut').value) || 0;
  
    document.getElementById('tree-cutting-tip').textContent = Cutting ${treesCut} trees releases significant CO2. Replanting is crucial.;
  
    const ctx = document.getElementById('treeCuttingChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['CO2 Released', 'Oxygen Lost'],
        datasets: [{
          data: [treesCut * 21, treesCut * 260], // Example values
          backgroundColor: ['#ff0000', '#006400']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Tree Cutting Impact' }
        }
      }
    });
  }
  
  // Tree Growing Impact
  function calculateTreeGrowing() {
    const treesPlanted = parseInt(document.getElementById('trees-planted').value) || 0;
  
    document.getElementById('tree-growing-tip').textContent = Planting ${treesPlanted} trees will absorb CO2 and improve air quality.;
  
    const ctx = document.getElementById('treeGrowingChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['CO2 Absorbed', 'Oxygen Produced'],
        datasets: [{
          data: [treesPlanted * 21, treesPlanted * 260],
          backgroundColor: ['#4CAF50', '#45a049']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Tree Growing Benefits' }
        }
      }
    });
  }
  
  // Carbon Footprint Calculation
  function calculateCarbonFootprint() {
    const carDistance = parseInt(document.getElementById('car-distance').value) || 0;
    const flights = parseInt(document.getElementById('flights').value) || 0;
  
    const footprint = (carDistance * 0.2) + (flights * 150); // Example formula
    document.getElementById('carbon-tip').textContent = Your estimated carbon footprint is ${footprint.toFixed(2)} kg CO2.;
  
    const ctx = document.getElementById('carbonChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Car Travel', 'Flights'],
        datasets: [{
          data: [carDistance * 0.2, flights * 150],
          backgroundColor: ['#ff5722', '#2196F3']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Carbon Footprint Sources' }
        }
      }
    });
  }
  
  // Energy Usage Calculation
  function calculateEnergyUsage() {
    const appliance = document.getElementById('appliance').value;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const powerRating = parseFloat(document.getElementById('power-rating').value) || 0;
  
    const energyUsed = hours * powerRating; // kWh
    document.getElementById('energy-tip').textContent = ${appliance} consumes ${energyUsed.toFixed(2)} kWh daily. Consider energy-efficient options.;
  
    const ctx = document.getElementById('energyChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [appliance],
        datasets: [{
          label: 'Energy Usage (kWh)',
          data: [energyUsed],
          backgroundColor: ['#FFD700']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Energy Consumption' }
        }
      }
    });
  }
  
  // Recycling Impact Calculation
  function calculateRecyclingImpact() {
    const paper = parseInt(document.getElementById('recycled-paper').value) || 0;
    const plastic = parseInt(document.getElementById('recycled-plastic').value) || 0;
    const glass = parseInt(document.getElementById('recycled-glass').value) || 0;
  
    const totalImpact = (paper * 0.8) + (plastic * 1.5) + (glass * 0.3); // Example formula
    document.getElementById('recycling-tip').textContent = Your recycling efforts saved ${totalImpact.toFixed(2)} kg of CO2.;
  
    const ctx = document.getElementById('recyclingChart').getContext('2d');
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Paper', 'Plastic', 'Glass'],
        datasets: [{
          data: [paper * 0.8, plastic * 1.5, glass * 0.3],
          backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Recycling Impact' }
        }
      }
    });
  }
  