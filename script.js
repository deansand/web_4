const farms = [
    { location: "UK", numOfAnimals: 100, fanPower: 500 },
    { location: "Ukraine", numOfAnimals: 80, fanPower: 300 },
    { location: "Italy", numOfAnimals: 120, fanPower: 700 },
    { location: "Spain", numOfAnimals: 60, fanPower: 200 },
];

// Display farms
function displayFarms(farmData) {
    const farmContainer = document.getElementById("farm-container");
    farmContainer.innerHTML = ''; 

    farmData.forEach(farm => {
        farmContainer.insertAdjacentHTML('beforeend', `
            <div>
                <h3>${farm.location}</h3>
                <p>Number of Animals: ${farm.numOfAnimals}</p>
                <p>Fan Power: ${farm.fanPower} Watts</p>
            </div>
        `);
    });
}

// Sort farms by number of animals
function sortFarmsByAnimals() {
    const sortedFarms = [...farms].sort((a, b) => b.numOfAnimals - a.numOfAnimals);
    displayFarms(sortedFarms);
}

// Sort farms by fan power
function sortFarmsByPower() {
    const sortedFarms = [...farms].sort((a, b) => b.fanPower - a.fanPower);
    displayFarms(sortedFarms);
}

// Search farms by location
function searchFarm() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredFarms = farms.filter(farm => farm.location.toLowerCase().includes(searchInput));
    displayFarms(filteredFarms);
}

// Calculate total fan power
function calculateTotalPower() {
    const totalPower = farms.reduce((total, farm) => total + farm.fanPower, 0);
    document.getElementById("total-power").textContent = totalPower;
}

// Initial rendering
displayFarms(farms);
calculateTotalPower();
