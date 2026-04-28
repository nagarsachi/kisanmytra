// Crop data for different seasons and regions
const cropData = {
    kharif: {
        north: ['Rice', 'Maize', 'Cotton', 'Sugarcane', 'Pulses', 'Sorghum', 'Pearl Millet', 'Groundnut'],
        south: ['Rice', 'Cotton', 'Groundnut', 'Sugarcane', 'Turmeric', 'Sorghum', 'Pearl Millet', 'Black Gram'],
        east: ['Rice', 'Maize', 'Cotton', 'Jute', 'Pulses', 'Sorghum', 'Groundnut', 'Sesame'],
        west: ['Cotton', 'Sugarcane', 'Maize', 'Groundnut', 'Soybean', 'Sorghum', 'Pearl Millet', 'Black Gram'],
        central: ['Rice', 'Maize', 'Cotton', 'Soybean', 'Pulses', 'Sorghum', 'Groundnut', 'Sesame']
    },
    rabi: {
        north: ['Wheat', 'Barley', 'Mustard', 'Chickpea', 'Peas', 'Lentil', 'Coriander', 'Potato'],
        south: ['Wheat', 'Barley', 'Mustard', 'Chickpea', 'Linseed', 'Coriander', 'Cumin', 'Potato'],
        east: ['Wheat', 'Barley', 'Mustard', 'Chickpea', 'Lentil', 'Linseed', 'Coriander', 'Peas'],
        west: ['Wheat', 'Barley', 'Mustard', 'Chickpea', 'Safflower', 'Cumin', 'Coriander', 'Isabgol'],
        central: ['Wheat', 'Barley', 'Mustard', 'Chickpea', 'Peas', 'Lentil', 'Coriander', 'Linseed']
    },
    zaid: {
        north: ['Cucumber', 'Watermelon', 'Muskmelon', 'Bottle gourd', 'Bitter gourd', 'Pumpkin', 'Tomato', 'Chili'],
        south: ['Cucumber', 'Watermelon', 'Muskmelon', 'Tomato', 'Brinjal', 'Chili', 'Bottle gourd', 'Ridge gourd'],
        east: ['Cucumber', 'Watermelon', 'Muskmelon', 'Bottle gourd', 'Pumpkin', 'Brinjal', 'Chili', 'Tomato'],
        west: ['Cucumber', 'Watermelon', 'Muskmelon', 'Tomato', 'Chili', 'Brinjal', 'Bottle gourd', 'Bitter gourd'],
        central: ['Cucumber', 'Watermelon', 'Muskmelon', 'Bottle gourd', 'Tomato', 'Chili', 'Pumpkin', 'Brinjal']
    }
};

// Crop information database
const cropInfo = {
    'Rice': {
        duration: '120-150 days',
        water: 'High',
        fertilizer: 'NPK 120:60:40 kg/ha',
        yield: '3-5 tons/ha',
        price: '₹18-25/kg',
        profit: '₹30,000-50,000/ha',
        climate: 'Tropical, subtropical',
        soil: 'Clay loam, well-drained',
        diseases: ['Blast', 'Bacterial leaf blight', 'Sheath blight'],
        varieties: ['IR64', 'Samba Mahsuri', 'Basmati 370']
    },
    'Wheat': {
        duration: '110-130 days',
        water: 'Medium',
        fertilizer: 'NPK 150:60:40 kg/ha',
        yield: '3-4 tons/ha',
        price: '₹20-28/kg',
        profit: '₹35,000-60,000/ha',
        climate: 'Temperate, subtropical',
        soil: 'Well-drained loam',
        diseases: ['Rust', 'Karnal bunt', 'Powdery mildew'],
        varieties: ['HD 2967', 'PBW 343', 'Lokwan']
    },
    'Cotton': {
        duration: '150-180 days',
        water: 'Medium',
        fertilizer: 'NPK 120:60:60 kg/ha',
        yield: '2-3 tons/ha',
        price: '₹6,000-8,000/quintal',
        profit: '₹40,000-70,000/ha',
        climate: 'Warm, long growing season',
        soil: 'Black cotton soil',
        diseases: ['Bollworm', 'Wilt', 'Leaf curl virus'],
        varieties: ['Bt cotton', 'MCU 5', 'H 1375']
    },
    'Maize': {
        duration: '90-110 days',
        water: 'Medium',
        fertilizer: 'NPK 120:60:40 kg/ha',
        yield: '3-5 tons/ha',
        price: '₹15-22/kg',
        profit: '₹25,000-45,000/ha',
        climate: 'Warm, moderate rainfall',
        soil: 'Well-drained, fertile',
        diseases: ['Northern leaf blight', 'Common rust', 'Stalk rot'],
        varieties: ['HQPM 1', 'DHM 117', 'Pioneer 3396']
    },
    'Sugarcane': {
        duration: '365 days',
        water: 'High',
        fertilizer: 'NPK 150:60:80 kg/ha',
        yield: '70-100 tons/ha',
        price: '₹3,000-3,500/quintal',
        profit: '₹80,000-1,50,000/ha',
        climate: 'Tropical, subtropical',
        soil: 'Deep, well-drained loam',
        diseases: ['Red rot', 'Smut', 'Grassy shoot'],
        varieties: ['Co 0238', 'Co 86032', 'BO 91']
    },
    'Groundnut': {
        duration: '90-110 days',
        water: 'Low to Medium',
        fertilizer: 'NPK 20:60:40 kg/ha',
        yield: '1.5-2.5 tons/ha',
        price: '₹40-55/kg',
        profit: '₹30,000-60,000/ha',
        climate: 'Warm, moderate rainfall',
        soil: 'Sandy loam, well-drained',
        diseases: ['Leaf spot', 'Rust', 'Tikka disease'],
        varieties: ['TG 37A', 'JL 24', 'GG 20']
    },
    'Soybean': {
        duration: '80-100 days',
        water: 'Medium',
        fertilizer: 'NPK 20:60:20 kg/ha',
        yield: '2-3 tons/ha',
        price: '₹35-45/kg',
        profit: '₹35,000-55,000/ha',
        climate: 'Warm, moderate rainfall',
        soil: 'Well-drained, fertile',
        diseases: ['Yellow mosaic virus', 'Rust', 'Pod blight'],
        varieties: ['JS 335', 'PK 472', 'MAUS 472']
    },
    'Chickpea': {
        duration: '90-110 days',
        water: 'Low',
        fertilizer: 'NPK 20:60:20 kg/ha',
        yield: '1.5-2.5 tons/ha',
        price: '₹45-60/kg',
        profit: '₹35,000-60,000/ha',
        climate: 'Cool, dry',
        soil: 'Well-drained, medium texture',
        diseases: ['Wilt', 'Ascochyta blight', 'Botrytis grey mold'],
        varieties: ['Pusa 362', 'JG 62', 'GPF 2']
    },
    'Mustard': {
        duration: '100-120 days',
        water: 'Low to Medium',
        fertilizer: 'NPK 80:40:20 kg/ha',
        yield: '1.5-2.5 tons/ha',
        price: '₹35-45/kg',
        profit: '₹25,000-45,000/ha',
        climate: 'Cool, moderate rainfall',
        soil: 'Loamy, well-drained',
        diseases: ['Alternaria blight', 'White rust', 'Downy mildew'],
        varieties: ['Pusa Bold', 'RH 30', 'Varuna']
    },
    'Tomato': {
        duration: '120-140 days',
        water: 'Medium',
        fertilizer: 'NPK 100:60:60 kg/ha',
        yield: '25-35 tons/ha',
        price: '₹15-25/kg',
        profit: '₹1,50,000-3,00,000/ha',
        climate: 'Warm, moderate temperature',
        soil: 'Well-drained, fertile',
        diseases: ['Early blight', 'Late blight', 'Leaf curl virus'],
        varieties: ['Pusa Ruby', 'Rashmi', 'Arka Vikas']
    },
    'Chili': {
        duration: '150-180 days',
        water: 'Medium',
        fertilizer: 'NPK 60:40:40 kg/ha',
        yield: '2-4 tons/ha',
        price: '₹60-80/kg',
        profit: '₹60,000-1,20,000/ha',
        climate: 'Warm, humid',
        soil: 'Well-drained, fertile',
        diseases: ['Leaf curl', 'Fruit rot', 'Powdery mildew'],
        varieties: ['Pusa Jwala', 'Kashmiri', 'Byadagi']
    }
};

// Weather data (simulated)
const weatherData = {
    current: {
        temp: 28,
        humidity: 65,
        rainfall: 2.5,
        description: 'Partly Cloudy'
    },
    forecast: [
        { day: 'Tomorrow', temp: 30, icon: 'fa-sun', description: 'Sunny' },
        { day: 'Day 3', temp: 29, icon: 'fa-cloud-sun', description: 'Partly Cloudy' },
        { day: 'Day 4', temp: 27, icon: 'fa-cloud', description: 'Cloudy' },
        { day: 'Day 5', temp: 26, icon: 'fa-cloud-rain', description: 'Light Rain' },
        { day: 'Day 6', temp: 28, icon: 'fa-cloud-sun', description: 'Partly Cloudy' }
    ]
};

// Pest and disease data
const pestData = [
    {
        name: 'Aphids',
        crop: 'All Crops',
        symptoms: 'Yellowing leaves, stunted growth, honeydew secretion',
        treatment: 'Apply neem oil spray or use ladybugs as natural predators'
    },
    {
        name: 'Leaf Blight',
        crop: 'Rice, Wheat',
        symptoms: 'Brown spots on leaves, yellowing from tip',
        treatment: 'Use fungicides like copper oxychloride or systemic fungicides'
    },
    {
        name: 'Bollworm',
        crop: 'Cotton',
        symptoms: 'Damage to flower buds and bolls, entry holes',
        treatment: 'Use BT cotton varieties or apply appropriate insecticides'
    },
    {
        name: 'Powdery Mildew',
        crop: 'Vegetables',
        symptoms: 'White powdery coating on leaves',
        treatment: 'Apply sulfur fungicides or improve air circulation'
    }
];

// Market price data
const marketPrices = [
    { crop: 'Wheat', market: 'Delhi', price: '₹22/kg', trend: 'up', change: '+2%' },
    { crop: 'Rice', market: 'Delhi', price: '₹20/kg', trend: 'down', change: '-1%' },
    { crop: 'Cotton', market: 'Mumbai', price: '₹7,200/quintal', trend: 'up', change: '+3%' },
    { crop: 'Pulses', market: 'Kolkata', price: '₹85/kg', trend: 'stable', change: '0%' },
    { crop: 'Maize', market: 'Chennai', price: '₹18/kg', trend: 'up', change: '+1%' }
];

// Calendar data
const calendarData = {
    january: {
        activities: [
            'Land preparation for Rabi crops',
            'Apply fertilizers to wheat and barley',
            'Monitor for pest attacks',
            'Arrange for irrigation if needed'
        ],
        crops: ['Wheat', 'Barley', 'Mustard', 'Chickpea']
    },
    february: {
        activities: [
            'Continue irrigation for Rabi crops',
            'Monitor temperature for frost damage',
            'Prepare for harvesting early varieties',
            'Start nursery for summer vegetables'
        ],
        crops: ['Wheat', 'Barley', 'Mustard', 'Chickpea']
    },
    march: {
        activities: [
            'Harvest Rabi crops',
            'Prepare fields for Kharif season',
            'Start summer crop planting',
            'Soil testing and fertilization'
        ],
        crops: ['Summer vegetables', 'Fodder crops']
    },
    april: {
        activities: [
            'Complete Rabi harvesting',
            'Start Kharif crop sowing',
            'Land leveling and preparation',
            'Arrange for Kharif seeds'
        ],
        crops: ['Early Kharif crops', 'Summer vegetables']
    },
    may: {
        activities: [
            'Continue Kharif sowing',
            'Irrigation management',
            'Weed control operations',
            'Monitor pest activity'
        ],
        crops: ['Rice', 'Cotton', 'Maize', 'Sugarcane']
    },
    june: {
        activities: [
            'Complete Kharif sowing',
            'Monsoon preparation',
            'Drainage management',
            'Apply first dose of fertilizers'
        ],
        crops: ['Rice', 'Cotton', 'Maize', 'Sugarcane', 'Pulses']
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCropRecommendations();
    loadWeatherForecast();
    loadPestAdvisory();
    loadMarketPrices();
    showCalendarMonth('january');
    setupNavigation();
    setupMobileMenu();
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Update active nav
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Update crop recommendations based on season and region
function updateCropRecommendations() {
    const season = document.getElementById('season-select').value;
    const region = document.getElementById('region-select').value;
    const cropGrid = document.getElementById('crop-grid');
    
    const crops = cropData[season][region];
    cropGrid.innerHTML = '';
    
    crops.forEach(crop => {
        const info = cropInfo[crop] || {
            duration: 'Varies',
            water: 'Medium',
            fertilizer: 'As per soil test',
            yield: 'Varies',
            price: 'Market rate'
        };
        
        const cropCard = document.createElement('div');
        cropCard.className = 'crop-card';
        cropCard.innerHTML = `
            <h3>${crop}</h3>
            <div class="crop-info">
                <span>Duration:</span>
                <span>${info.duration}</span>
            </div>
            <div class="crop-info">
                <span>Water Need:</span>
                <span>${info.water}</span>
            </div>
            <div class="crop-info">
                <span>Fertilizer:</span>
                <span>${info.fertilizer}</span>
            </div>
            <div class="crop-info">
                <span>Expected Yield:</span>
                <span>${info.yield}</span>
            </div>
            <div class="crop-info">
                <span>Market Price:</span>
                <span>${info.price}</span>
            </div>
        `;
        cropGrid.appendChild(cropCard);
    });
}

// Load weather forecast
function loadWeatherForecast() {
    const forecastContainer = document.getElementById('weather-forecast');
    forecastContainer.innerHTML = '';
    
    weatherData.forecast.forEach(day => {
        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';
        forecastDay.innerHTML = `
            <h4>${day.day}</h4>
            <i class="fas ${day.icon}"></i>
            <p>${day.temp}°C</p>
            <p>${day.description}</p>
        `;
        forecastContainer.appendChild(forecastDay);
    });
    
    // Update current weather
    document.getElementById('current-temp').textContent = `${weatherData.current.temp}°C`;
    document.getElementById('current-humidity').textContent = `${weatherData.current.humidity}%`;
    document.getElementById('current-rain').textContent = `${weatherData.current.rainfall}mm`;
}

// Analyze soil health
function analyzeSoilHealth() {
    const ph = parseFloat(document.getElementById('soil-ph').value) || 6.5;
    const nitrogen = parseFloat(document.getElementById('soil-nitrogen').value) || 40;
    const phosphorus = parseFloat(document.getElementById('soil-phosphorus').value) || 20;
    const potassium = parseFloat(document.getElementById('soil-potassium').value) || 30;
    
    const resultsDiv = document.getElementById('soil-results');
    
    let phStatus = '';
    if (ph < 6.0) phStatus = 'Acidic - Add lime to increase pH';
    else if (ph > 7.5) phStatus = 'Alkaline - Add sulfur to decrease pH';
    else phStatus = 'Optimal - Good for most crops';
    
    let nitrogenStatus = '';
    if (nitrogen < 40) nitrogenStatus = 'Low - Add nitrogen-rich fertilizers';
    else if (nitrogen > 80) nitrogenStatus = 'High - Reduce nitrogen application';
    else nitrogenStatus = 'Optimal - Maintain current levels';
    
    let phosphorusStatus = '';
    if (phosphorus < 20) phosphorusStatus = 'Low - Add phosphorus fertilizers';
    else if (phosphorus > 60) phosphorusStatus = 'High - Reduce phosphorus application';
    else phosphorusStatus = 'Optimal - Maintain current levels';
    
    let potassiumStatus = '';
    if (potassium < 30) potassiumStatus = 'Low - Add potassium fertilizers';
    else if (potassium > 80) potassiumStatus = 'High - Reduce potassium application';
    else potassiumStatus = 'Optimal - Maintain current levels';
    
    resultsDiv.innerHTML = `
        <h3>Soil Health Analysis</h3>
        <div class="soil-result-item">
            <strong>pH Level (${ph}):</strong> ${phStatus}
        </div>
        <div class="soil-result-item">
            <strong>Nitrogen (${nitrogen} kg/ha):</strong> ${nitrogenStatus}
        </div>
        <div class="soil-result-item">
            <strong>Phosphorus (${phosphorus} kg/ha):</strong> ${phosphorusStatus}
        </div>
        <div class="soil-result-item">
            <strong>Potassium (${potassium} kg/ha):</strong> ${potassiumStatus}
        </div>
        <div class="soil-recommendation">
            <h4>Recommendation:</h4>
            <p>Based on your soil analysis, consider crops that match your soil conditions. 
            Regular soil testing every 2-3 years is recommended for optimal crop management.</p>
        </div>
    `;
}

// Show calendar month
function showCalendarMonth(month) {
    const calendarContent = document.getElementById('calendar-content');
    const data = calendarData[month];
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === month) {
            btn.classList.add('active');
        }
    });
    
    calendarContent.innerHTML = `
        <h3>${month.charAt(0).toUpperCase() + month.slice(1)} Activities</h3>
        <div class="calendar-activities">
            <h4>Recommended Activities:</h4>
            <ul>
                ${data.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
        </div>
        <div class="calendar-crops">
            <h4>Suitable Crops:</h4>
            <div class="crop-tags">
                ${data.crops.map(crop => `<span class="crop-tag">${crop}</span>`).join('')}
            </div>
        </div>
    `;
}

// Load pest advisory
function loadPestAdvisory() {
    const pestGrid = document.getElementById('pest-grid');
    pestGrid.innerHTML = '';
    
    pestData.forEach(pest => {
        const pestCard = document.createElement('div');
        pestCard.className = 'pest-card';
        pestCard.innerHTML = `
            <h3>${pest.name}</h3>
            <p><strong>Affects:</strong> ${pest.crop}</p>
            <div class="symptoms">
                <h4>Symptoms:</h4>
                <p>${pest.symptoms}</p>
            </div>
            <div class="treatment">
                <h4>Treatment:</h4>
                <p>${pest.treatment}</p>
            </div>
        `;
        pestGrid.appendChild(pestCard);
    });
}

// Load market prices
function loadMarketPrices() {
    const marketTable = document.getElementById('market-table');
    
    marketTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Crop</th>
                    <th>Market</th>
                    <th>Price</th>
                    <th>Trend</th>
                </tr>
            </thead>
            <tbody>
                ${marketPrices.map(item => `
                    <tr>
                        <td>${item.crop}</td>
                        <td>${item.market}</td>
                        <td>${item.price}</td>
                        <td class="trend ${item.trend}">
                            <i class="fas fa-${item.trend === 'up' ? 'arrow-up' : item.trend === 'down' ? 'arrow-down' : 'minus'}"></i>
                            ${item.change}
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Crop Profitability Calculator
function calculateProfitability() {
    const crop = document.getElementById('profit-crop-select').value;
    const landSize = parseFloat(document.getElementById('land-size').value) || 1;
    const yieldPerHa = parseFloat(document.getElementById('yield-input').value) || 3;
    const marketPrice = parseFloat(document.getElementById('price-input').value) || 20;
    const totalCost = parseFloat(document.getElementById('cost-input').value) || 15000;
    
    const totalYield = landSize * yieldPerHa;
    const totalRevenue = totalYield * marketPrice;
    const netProfit = totalRevenue - totalCost;
    const roi = ((netProfit / totalCost) * 100).toFixed(2);
    
    const resultDiv = document.getElementById('profitability-result');
    resultDiv.innerHTML = `
        <div class="profitability-summary">
            <h4>Profitability Analysis for ${crop}</h4>
            <div class="profit-grid">
                <div class="profit-item">
                    <span class="label">Total Yield:</span>
                    <span class="value">${totalYield.toFixed(2)} tons</span>
                </div>
                <div class="profit-item">
                    <span class="label">Total Revenue:</span>
                    <span class="value">₹${totalRevenue.toLocaleString()}</span>
                </div>
                <div class="profit-item">
                    <span class="label">Total Cost:</span>
                    <span class="value">₹${totalCost.toLocaleString()}</span>
                </div>
                <div class="profit-item ${netProfit > 0 ? 'profit' : 'loss'}">
                    <span class="label">Net Profit:</span>
                    <span class="value">₹${netProfit.toLocaleString()}</span>
                </div>
                <div class="profit-item">
                    <span class="label">ROI:</span>
                    <span class="value">${roi}%</span>
                </div>
            </div>
            <div class="profitability-advice">
                <p><strong>Recommendation:</strong> ${getProfitabilityAdvice(roi, netProfit)}</p>
            </div>
        </div>
    `;
}

function getProfitabilityAdvice(roi, netProfit) {
    if (netProfit > 50000) {
        return "Excellent profitability! This crop is highly recommended for your region.";
    } else if (netProfit > 20000) {
        return "Good profitability. Consider this crop for diversification.";
    } else if (netProfit > 0) {
        return "Modest profitability. Monitor market conditions and input costs.";
    } else {
        return "Loss-making at current parameters. Consider different crops or optimize costs.";
    }
}

// Crop Comparison Feature
function compareCrops() {
    const crop1 = document.getElementById('compare-crop1').value;
    const crop2 = document.getElementById('compare-crop2').value;
    
    const info1 = cropInfo[crop1];
    const info2 = cropInfo[crop2];
    
    const comparisonDiv = document.getElementById('crop-comparison-result');
    comparisonDiv.innerHTML = `
        <div class="crop-comparison">
            <h4>Crop Comparison: ${crop1} vs ${crop2}</h4>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>${crop1}</th>
                            <th>${crop2}</th>
                            <th>Better Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Duration</td>
                            <td>${info1.duration}</td>
                            <td>${info2.duration}</td>
                            <td>${compareDuration(info1.duration, info2.duration)}</td>
                        </tr>
                        <tr>
                            <td>Water Requirement</td>
                            <td>${info1.water}</td>
                            <td>${info2.water}</td>
                            <td>${compareWater(info1.water, info2.water)}</td>
                        </tr>
                        <tr>
                            <td>Expected Yield</td>
                            <td>${info1.yield}</td>
                            <td>${info2.yield}</td>
                            <td>${compareYield(info1.yield, info2.yield)}</td>
                        </tr>
                        <tr>
                            <td>Market Price</td>
                            <td>${info1.price}</td>
                            <td>${info2.price}</td>
                            <td>${comparePrice(info1.price, info2.price)}</td>
                        </tr>
                        <tr>
                            <td>Expected Profit</td>
                            <td>${info1.profit}</td>
                            <td>${info2.profit}</td>
                            <td>${compareProfit(info1.profit, info2.profit)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="comparison-summary">
                <p><strong>Overall Recommendation:</strong> ${getOverallRecommendation(crop1, crop2, info1, info2)}</p>
            </div>
        </div>
    `;
}

function compareDuration(d1, d2) {
    const days1 = parseInt(d1.split('-')[0]);
    const days2 = parseInt(d2.split('-')[0]);
    return days1 < days2 ? d1 : d2;
}

function compareWater(w1, w2) {
    const order = {'Low': 1, 'Low to Medium': 2, 'Medium': 3, 'High': 4};
    return order[w1] < order[w2] ? w1 : w2;
}

function compareYield(y1, y2) {
    const yield1 = parseFloat(y1.split('-')[0]);
    const yield2 = parseFloat(y2.split('-')[0]);
    return yield1 > yield2 ? y1 : y2;
}

function comparePrice(p1, p2) {
    const price1 = parseInt(p1.replace(/[₹,\/kg]/g, '').split('-')[0]);
    const price2 = parseInt(p2.replace(/[₹,\/kg]/g, '').split('-')[0]);
    return price1 > price2 ? p1 : p2;
}

function compareProfit(p1, p2) {
    const profit1 = parseInt(p1.replace(/[₹,\/ha]/g, '').split('-')[0]);
    const profit2 = parseInt(p2.replace(/[₹,\/ha]/g, '').split('-')[0]);
    return profit1 > profit2 ? p1 : p2;
}

function getOverallRecommendation(crop1, crop2, info1, info2) {
    const profit1 = parseInt(info1.profit.replace(/[₹,\/ha]/g, '').split('-')[0]);
    const profit2 = parseInt(info2.profit.replace(/[₹,\/ha]/g, '').split('-')[0]);
    
    if (profit1 > profit2 * 1.2) {
        return `${crop1} shows significantly better profitability. Consider ${crop1} for higher returns.`;
    } else if (profit2 > profit1 * 1.2) {
        return `${crop2} shows significantly better profitability. Consider ${crop2} for higher returns.`;
    } else {
        return `Both crops have similar profitability. Consider other factors like water availability and market demand.`;
    }
}

// Fertilizer Calculator
function calculateFertilizer() {
    const crop = document.getElementById('fert-crop-select').value;
    const area = parseFloat(document.getElementById('fert-area').value) || 1;
    const soilNitrogen = parseFloat(document.getElementById('soil-nitrogen').value) || 40;
    const soilPhosphorus = parseFloat(document.getElementById('soil-phosphorus').value) || 20;
    const soilPotassium = parseFloat(document.getElementById('soil-potassium').value) || 30;
    
    const cropInfo = getCropFertilizerNeeds(crop);
    const nitrogenNeeded = Math.max(0, (cropInfo.nitrogen - soilNitrogen) * area);
    const phosphorusNeeded = Math.max(0, (cropInfo.phosphorus - soilPhosphorus) * area);
    const potassiumNeeded = Math.max(0, (cropInfo.potassium - soilPotassium) * area);
    
    const resultDiv = document.getElementById('fertilizer-result');
    resultDiv.innerHTML = `
        <div class="fertilizer-recommendation">
            <h4>Fertilizer Recommendation for ${crop}</h4>
            <div class="fertilizer-grid">
                <div class="fert-item">
                    <span class="label">Nitrogen (N):</span>
                    <span class="value">${nitrogenNeeded.toFixed(1)} kg</span>
                </div>
                <div class="fert-item">
                    <span class="label">Phosphorus (P):</span>
                    <span class="value">${phosphorusNeeded.toFixed(1)} kg</span>
                </div>
                <div class="fert-item">
                    <span class="label">Potassium (K):</span>
                    <span class="value">${potassiumNeeded.toFixed(1)} kg</span>
                </div>
            </div>
            <div class="fertilizer-schedule">
                <h5>Application Schedule:</h5>
                <ul>
                    <li><strong>Basal Dose:</strong> Apply 50% N, 100% P, 50% K before sowing</li>
                    <li><strong>First Top Dress:</strong> Apply 25% N at 25-30 days after sowing</li>
                    <li><strong>Second Top Dress:</strong> Apply 25% N, 50% K at 45-50 days after sowing</li>
                </ul>
            </div>
        </div>
    `;
}

function getCropFertilizerNeeds(crop) {
    const needs = {
        'Rice': { nitrogen: 120, phosphorus: 60, potassium: 40 },
        'Wheat': { nitrogen: 150, phosphorus: 60, potassium: 40 },
        'Cotton': { nitrogen: 120, phosphorus: 60, potassium: 60 },
        'Maize': { nitrogen: 120, phosphorus: 60, potassium: 40 },
        'Sugarcane': { nitrogen: 150, phosphorus: 60, potassium: 80 },
        'Groundnut': { nitrogen: 20, phosphorus: 60, potassium: 40 },
        'Soybean': { nitrogen: 20, phosphorus: 60, potassium: 20 },
        'Chickpea': { nitrogen: 20, phosphorus: 60, potassium: 20 },
        'Mustard': { nitrogen: 80, phosphorus: 40, potassium: 20 },
        'Tomato': { nitrogen: 100, phosphorus: 60, potassium: 60 },
        'Chili': { nitrogen: 60, phosphorus: 40, potassium: 40 }
    };
    return needs[crop] || { nitrogen: 80, phosphorus: 40, potassium: 40 };
}

// Irrigation Scheduler
function generateIrrigationSchedule() {
    const crop = document.getElementById('irrigation-crop-select').value;
    const season = document.getElementById('irrigation-season').value;
    const soilType = document.getElementById('soil-type').value;
    
    const schedule = getIrrigationSchedule(crop, season, soilType);
    const scheduleDiv = document.getElementById('irrigation-schedule-result');
    
    scheduleDiv.innerHTML = `
        <div class="irrigation-schedule">
            <h4>Irrigation Schedule for ${crop}</h4>
            <div class="schedule-info">
                <p><strong>Season:</strong> ${season.charAt(0).toUpperCase() + season.slice(1)}</p>
                <p><strong>Soil Type:</strong> ${soilType}</p>
                <p><strong>Total Irrigations:</strong> ${schedule.totalIrrigations}</p>
            </div>
            <div class="irrigation-timeline">
                <h5>Irrigation Timeline:</h5>
                <div class="timeline">
                    ${schedule.irrigations.map((irr, index) => `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h6>${irr.stage}</h6>
                                <p><strong>Days after sowing:</strong> ${irr.days}</p>
                                <p><strong>Water depth:</strong> ${irr.depth}</p>
                                <p><strong>Interval:</strong> ${irr.interval}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="irrigation-tips">
                <h5>Important Tips:</h5>
                <ul>
                    ${schedule.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function getIrrigationSchedule(crop, season, soilType) {
    const schedules = {
        'Rice': {
            totalIrrigations: 25-30,
            irrigations: [
                { stage: 'Land Preparation', days: 0, depth: '10-15 cm', interval: 'Continuous flooding' },
                { stage: 'Establishment', days: 10, depth: '5 cm', interval: '2-3 days' },
                { stage: 'Tillering', days: 25, depth: '5 cm', interval: '4-5 days' },
                { stage: 'Panicle Initiation', days: 45, depth: '7 cm', interval: '3-4 days' },
                { stage: 'Flowering', days: 65, depth: '5 cm', interval: '2-3 days' },
                { stage: 'Maturity', days: 85, depth: 'Drain water', interval: 'Stop irrigation' }
            ],
            tips: [
                'Maintain 2-5 cm standing water during critical stages',
                'Drain water 10-15 days before harvest',
                'Use alternate wetting and drying for water conservation'
            ]
        },
        'Wheat': {
            totalIrrigations: 4-6,
            irrigations: [
                { stage: 'CRI Stage', days: 21, depth: '5-6 cm', interval: '3-4 weeks' },
                { stage: 'Tillering', days: 45, depth: '5-6 cm', interval: '3-4 weeks' },
                { stage: 'Jointing', days: 65, depth: '6 cm', interval: '2-3 weeks' },
                { stage: 'Flowering', days: 85, depth: '5-6 cm', interval: '2-3 weeks' }
            ],
            tips: [
                'Critical irrigation stages: CRI, tillering, jointing, flowering',
                'Avoid irrigation at maturity stage',
                'Light irrigation is preferred over heavy flooding'
            ]
        },
        'Cotton': {
            totalIrrigations: 3-5,
            irrigations: [
                { stage: 'Pre-sowing', days: 0, depth: '8-10 cm', interval: 'Pre-planting' },
                { stage: 'Vegetative', days: 30, depth: '6 cm', interval: '3-4 weeks' },
                { stage: 'Flowering', days: 60, depth: '6 cm', interval: '2-3 weeks' },
                { stage: 'Boll Development', days: 90, depth: '5 cm', interval: '2-3 weeks' }
            ],
            tips: [
                'Avoid water stress during flowering and boll development',
                'Excess irrigation at maturity affects boll opening',
                'Drip irrigation gives best water use efficiency'
            ]
        }
    };
    
    const defaultSchedule = {
        totalIrrigations: 3-4,
        irrigations: [
            { stage: 'Establishment', days: 15, depth: '4-5 cm', interval: '2-3 weeks' },
            { stage: 'Vegetative', days: 35, depth: '5 cm', interval: '2-3 weeks' },
            { stage: 'Flowering', days: 60, depth: '5 cm', interval: '2-3 weeks' }
        ],
        tips: [
            'Irrigate based on soil moisture and crop stage',
            'Early morning or late evening is best for irrigation',
            'Avoid irrigation during strong winds'
        ]
    };
    
    return schedules[crop] || defaultSchedule;
}

// Show crop recommendation (from hero button)
function showCropRecommendation() {
    document.getElementById('crops').scrollIntoView({ behavior: 'smooth' });
}

// Show weather forecast (from hero button)
function showWeatherForecast() {
    document.getElementById('weather').scrollIntoView({ behavior: 'smooth' });
}

// Show tools section (from hero button)
function showFarmingTools() {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}

// Filter functions
document.getElementById('crop-filter')?.addEventListener('change', filterMarketPrices);
document.getElementById('market-filter')?.addEventListener('change', filterMarketPrices);

function filterMarketPrices() {
    const cropFilter = document.getElementById('crop-filter').value;
    const marketFilter = document.getElementById('market-filter').value;
    
    let filteredPrices = marketPrices;
    
    if (cropFilter !== 'all') {
        filteredPrices = filteredPrices.filter(item => 
            item.crop.toLowerCase() === cropFilter.toLowerCase()
        );
    }
    
    if (marketFilter !== 'all') {
        filteredPrices = filteredPrices.filter(item => 
            item.market.toLowerCase() === marketFilter.toLowerCase()
        );
    }
    
    const marketTable = document.getElementById('market-table');
    marketTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Crop</th>
                    <th>Market</th>
                    <th>Price</th>
                    <th>Trend</th>
                </tr>
            </thead>
            <tbody>
                ${filteredPrices.map(item => `
                    <tr>
                        <td>${item.crop}</td>
                        <td>${item.market}</td>
                        <td>${item.price}</td>
                        <td class="price-${item.trend}">${item.change}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}
