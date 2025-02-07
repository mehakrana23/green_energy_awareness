const topics = [
    { title: "Polar Bear", description: "Polar Bears are large carnivorous bears found in the Arctic. They are endangered due to climate change and loss of habitat." },
    { title: "Rainforest Jaguar", description: "The Jaguar is a big cat native to Central and South America, found in rainforests. It is critically endangered due to deforestation." },
    { title: "African Elephant", description: "The African Elephant is the largest land mammal. They are endangered due to poaching and habitat loss." },
    { title: "Mountain Gorilla", description: "Mountain Gorillas are critically endangered primates found in mountain regions of central Africa. Their populations are threatened by poaching and habitat loss." },
    { title: "Blue Whale", description: "Blue Whales are the largest animals on Earth, living in oceans. They face threats from ship strikes and climate change." },
    { title: "Red Panda", description: "Red Pandas are small mammals found in the Himalayas. They are endangered due to habitat loss and poaching." },
    { title: "Amur Leopard", description: "The Amur Leopard is a critically endangered big cat, native to the forests of the Russian Far East and China." },
    { title: "Vaquita", description: "The Vaquita is a critically endangered species of porpoise found in the northern part of the Gulf of California. It is on the verge of extinction due to bycatch." },
    { title: "Sumatran Rhino", description: "The Sumatran Rhino is one of the world's smallest rhinos. It is endangered due to habitat loss and hunting." },
    { title: "Hawaiian Monk Seal", description: "The Hawaiian Monk Seal is a critically endangered species found in the Hawaiian Islands. They are threatened by climate change and human activity." },

    { title: "Rainforest", description: "Rainforests are dense forests located near the equator, which receive heavy rainfall. They are home to a variety of plant and animal species." },
    { title: "Redwood Forest", description: "Redwood Forests are home to some of the tallest trees in the world. These forests are important for biodiversity and carbon storage." },
    { title: "Amazon Water Lily", description: "The Amazon Water Lily is a large aquatic plant found in the Amazon River. It is known for its giant leaves that float on the water's surface." },
    { title: "Baobab Tree", description: "The Baobab Tree, native to Africa, is known for its large, swollen trunk that stores water. It is often called the 'Tree of Life'." },
    { title: "Coral Reef", description: "Coral reefs are underwater ecosystems formed by colonies of corals. They are home to diverse marine species and are threatened by climate change and pollution." },
    { title: "Mangrove Forest", description: "Mangrove forests are coastal ecosystems found in tropical and subtropical regions. They protect coastlines and provide habitats for marine life." },
    { title: "Banyan Tree", description: "The Banyan Tree is a large tropical tree that has aerial roots that grow into the ground, often creating a sprawling canopy." },
    { title: "Eucalyptus", description: "Eucalyptus trees are native to Australia and are known for their aromatic leaves. They are important to wildlife such as koalas." },
    { title: "Bamboo Forest", description: "Bamboo forests are unique ecosystems dominated by bamboo plants. Bamboo is one of the fastest-growing plants and provides habitat for various species." },
    { title: "Cactus", description: "Cactus plants are found in desert regions and are known for their ability to store water in their stems, making them resilient in harsh environments." },

    { title: "Coral Reef", description: "Coral reefs are vibrant ecosystems found in the world's oceans, providing habitats for many marine species and helping maintain marine biodiversity." },
    { title: "Desert", description: "Deserts are arid regions that receive minimal rainfall. Despite their harsh conditions, they are home to many species adapted to the dry environment." },
    { title: "Grassland", description: "Grasslands are large, open ecosystems dominated by grasses and herbaceous plants. They support large herbivores and predators." },
    { title: "Ocean", description: "The ocean is Earth's largest ecosystem, covering over 70% of the planet. It is home to diverse species of marine life." },
    { title: "Forest", description: "Forests are dense groups of trees that play a crucial role in carbon sequestration and maintaining biodiversity." },
    { title: "Tundra", description: "The tundra is a cold, treeless biome found in polar regions. It has unique plant and animal species that are adapted to extreme cold." },
    { title: "Mountain", description: "Mountains are large landforms that rise prominently above the surrounding terrain. They are home to diverse ecosystems and are often important for human activity." },
    { title: "River", description: "Rivers are flowing bodies of water that provide habitats for various aquatic species and play a vital role in shaping the landscape." },
    { title: "Lake", description: "Lakes are bodies of water surrounded by land. They provide habitat for aquatic life and are important for local ecosystems." },
    { title: "Wetland", description: "Wetlands are areas of land that are saturated with water, often supporting diverse ecosystems and acting as natural water filters." },

    { title: "Climate Change", description: "Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions, often caused by human activities." },
    { title: "Deforestation", description: "Deforestation is the clearing of forests for agricultural and industrial development, leading to the loss of biodiversity and carbon storage." },
    { title: "Pollution", description: "Pollution is the introduction of harmful substances into the environment, affecting air, water, and land quality." },
    { title: "Overfishing", description: "Overfishing refers to the depletion of fish populations due to unsustainable fishing practices." },
    { title: "Wildlife Poaching", description: "Wildlife poaching is the illegal hunting, capturing, or killing of animals for profit, often endangering species." },
    { title: "Soil Erosion", description: "Soil erosion is the removal of the topsoil by wind, water, or human activity, leading to a decline in soil quality and fertility." },
    { title: "Water Scarcity", description: "Water scarcity refers to the lack of sufficient fresh water resources, affecting many regions worldwide." },
    { title: "Air Pollution", description: "Air pollution occurs when harmful substances like smoke and chemicals are released into the atmosphere, affecting human health and the environment." },
    { title: "Ocean Acidification", description: "Ocean acidification is the decrease in pH of the oceans due to the absorption of excess carbon dioxide from the atmosphere." },
    { title: "Biodiversity Loss", description: "Biodiversity loss refers to the decline in the variety and abundance of life forms on Earth, often due to human-induced factors like habitat destruction." }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const reloadBtn = document.getElementById('reloadBtn');
const searchResults = document.getElementById('searchResults');

// Function to display search results
function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No results found.</p>';
    } else {
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    }
}

// Function to search topics based on user input
function searchTopics() {
    const query = searchInput.value.toLowerCase();
    const filteredResults = topics.filter(topic => topic.title.toLowerCase().includes(query));
    displayResults(filteredResults);
}

// Event listener for search button
searchBtn.addEventListener('click', searchTopics);

// Event listener for reload button
reloadBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.innerHTML = '';
});

// Optional: Trigger search when pressing Enter
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchTopics();
    }
});