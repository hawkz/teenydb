// Main application script for Teenypings Database

// Global variables
let teenypingsData = [];
let filteredTeenypings = [];
let currentFilters = {
    search: '',
    season: 'all',
    color: 'all',
    spellType: 'all'
};
let currentTeenypingIndex = 0;

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const seasonFilters = document.getElementById('season-filters');
const colorFilters = document.getElementById('color-filters');
const spellFilters = document.getElementById('spell-filters');
const teenypingsGallery = document.getElementById('teenypings-gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentCount = document.getElementById('current-count');
const totalCount = document.getElementById('total-count');
const teenypingDetails = document.getElementById('teenyping-details');
const closeDetails = document.getElementById('close-details');

// Detail elements
const detailName = document.getElementById('detail-name');
const detailImage = document.getElementById('detail-image');
const detailSeason = document.getElementById('detail-season');
const detailEpisode = document.getElementById('detail-episode');
const detailColor = document.getElementById('detail-color');
const detailSpell = document.getElementById('detail-spell');
const detailPower = document.getElementById('detail-power');
const detailTransformation = document.getElementById('detail-transformation');
const detailDescription = document.getElementById('detail-description');

// Fetch Teenypings data
async function fetchTeenypingsData() {
    try {
        const response = await fetch('teenypings_data.json');
        teenypingsData = await response.json();
        
        // Initialize the app after data is loaded
        initializeApp();
    } catch (error) {
        console.error('Error loading Teenypings data:', error);
        teenypingsGallery.innerHTML = '<p class="error-message">Error loading data. Please try again later.</p>';
    }
}

// Initialize the application
function initializeApp() {
    // Set initial filtered data
    filteredTeenypings = [...teenypingsData];
    
    // Generate filter options
    generateFilterOptions();
    
    // Render initial gallery
    renderGallery();
    
    // Set up event listeners
    setupEventListeners();
}

// Generate filter options based on available data
function generateFilterOptions() {
    // Get unique colors and spell types
    const colors = [...new Set(teenypingsData.filter(t => t.color).map(t => t.color))];
    const spellTypes = [...new Set(teenypingsData.filter(t => t.spell_type).map(t => t.spell_type))];
    
    // Add color filters
    colors.forEach(color => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', color);
        button.textContent = capitalizeFirstLetter(color);
        colorFilters.appendChild(button);
    });
    
    // Add spell type filters
    spellTypes.forEach(spellType => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', spellType);
        button.textContent = capitalizeFirstLetter(spellType);
        spellFilters.appendChild(button);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', () => handleSearch());
    
    // Filter buttons
    seasonFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(seasonFilters, e.target);
            currentFilters.season = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    colorFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(colorFilters, e.target);
            currentFilters.color = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    spellFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(spellFilters, e.target);
            currentFilters.spellType = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', showPreviousTeenyping);
    nextBtn.addEventListener('click', showNextTeenyping);
    
    // Details modal
    closeDetails.addEventListener('click', () => {
        teenypingDetails.style.display = 'none';
    });
    
    // Close modal when clicking outside
    teenypingDetails.addEventListener('click', e => {
        if (e.target === teenypingDetails) {
            teenypingDetails.style.display = 'none';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && teenypingDetails.style.display === 'flex') {
            teenypingDetails.style.display = 'none';
        } else if (e.key === 'ArrowLeft') {
            showPreviousTeenyping();
        } else if (e.key === 'ArrowRight') {
            showNextTeenyping();
        }
    });
    
    // Touch swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    teenypingsGallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    teenypingsGallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            showNextTeenyping();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            showPreviousTeenyping();
        }
    }
}

// Handle search input
function handleSearch() {
    currentFilters.search = searchInput.value.toLowerCase();
    applyFilters();
}

// Update active filter button
function updateActiveFilter(container, clickedButton) {
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

// Apply all current filters
function applyFilters() {
    filteredTeenypings = teenypingsData.filter(teenyping => {
        // Search filter
        const matchesSearch = currentFilters.search === '' || 
            teenyping.name.toLowerCase().includes(currentFilters.search) ||
            (teenyping.description && teenyping.description.toLowerCase().includes(currentFilters.search));
        
        // Season filter
        const matchesSeason = currentFilters.season === 'all' || 
            teenyping.season.toString() === currentFilters.season;
        
        // Color filter
        const matchesColor = currentFilters.color === 'all' || 
            (teenyping.color && teenyping.color.toLowerCase() === currentFilters.color.toLowerCase());
        
        // Spell type filter
        const matchesSpellType = currentFilters.spellType === 'all' || 
            (teenyping.spell_type && teenyping.spell_type.toLowerCase() === currentFilters.spellType.toLowerCase());
        
        return matchesSearch && matchesSeason && matchesColor && matchesSpellType;
    });
    
    // Reset current index and render
    currentTeenypingIndex = 0;
    renderGallery();
}

// Render the gallery with current filtered Teenypings
function renderGallery() {
    // Clear current gallery
    teenypingsGallery.innerHTML = '';
    
    // Update counter
    totalCount.textContent = filteredTeenypings.length;
    currentCount.textContent = filteredTeenypings.length > 0 ? currentTeenypingIndex + 1 : 0;
    
    // Check if we have results
    if (filteredTeenypings.length === 0) {
        teenypingsGallery.innerHTML = '<p class="no-results">No Teenypings found matching your filters.</p>';
        return;
    }
    
    // Create cards for each Teenyping
    filteredTeenypings.forEach((teenyping, index) => {
        const card = document.createElement('div');
        card.className = 'teenyping-card';
        card.setAttribute('data-index', index);
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'teenyping-image';
        
        const image = document.createElement('img');
        if (teenyping.image_url && teenyping.image_url !== '') {
            image.src = teenyping.image_url;
        } else {
            // Placeholder image if no image URL is available
            image.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
        }
        image.alt = teenyping.name;
        image.onerror = function() {
            // If image fails to load, replace with placeholder
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
        };
        
        imageContainer.appendChild(image);
        
        const info = document.createElement('div');
        info.className = 'teenyping-info';
        
        const name = document.createElement('div');
        name.className = 'teenyping-name';
        name.textContent = teenyping.name;
        
        const season = document.createElement('div');
        season.className = 'teenyping-season';
        season.textContent = `Season ${teenyping.season}`;
        
        info.appendChild(name);
        info.appendChild(season);
        
        card.appendChild(imageContainer);
        card.appendChild(info);
        
        // Add click event to show details
        card.addEventListener('click', () => {
            currentTeenypingIndex = index;
            showTeenypingDetails(teenyping);
            updateCounter();
        });
        
        teenypingsGallery.appendChild(card);
    });
}

// Show details for a specific Teenyping
function showTeenypingDetails(teenyping) {
    detailName.textContent = teenyping.name;
    
    if (teenyping.image_url && teenyping.image_url !== '') {
        detailImage.src = teenyping.image_url;
    } else {
        detailImage.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
    }
    detailImage.alt = teenyping.name;
    
    detailSeason.textContent = teenyping.season;
    detailEpisode.textContent = teenyping.episode || 'Unknown';
    detailColor.textContent = capitalizeFirstLetter(teenyping.color) || 'Unknown';
    detailSpell.textContent = capitalizeFirstLetter(teenyping.spell_type) || 'Unknown';
    detailPower.textContent = teenyping.power || 'Unknown';
    detailTransformation.textContent = teenyping.transformation || 'None';
    detailDescription.textContent = teenyping.description || 'No description available.';
    
    teenypingDetails.style.display = 'flex';
}

// Show previous Teenyping
function showPreviousTeenyping() {
    if (filteredTeenypings.length === 0) return;
    
    currentTeenypingIndex--;
    if (currentTeenypingIndex < 0) {
        currentTeenypingIndex = filteredTeenypings.length - 1;
    }
    
    showTeenypingDetails(filteredTeenypings[currentTeenypingIndex]);
    updateCounter();
}

// Show next Teenyping
function showNextTeenyping() {
    if (filteredTeenypings.length === 0) return;
    
    currentTeenypingIndex++;
    if (currentTeenypingIndex >= filteredTeenypings.length) {
        currentTeenypingIndex = 0;
    }
    
    showTeenypingDetails(filteredTeenypings[currentTeenypingIndex]);
    updateCounter();
}

function showPreviousTeenyping() {
    if (filteredTeenypings.length === 0) return;
    currentTeenypingIndex--;
    if (currentTeenypingIndex < 0) {
        currentTeenypingIndex = filteredTeenypings.length - 1;
    }
    updateCounter();
    highlightCurrentCard();
}

function showNextTeenyping() {
    if (filteredTeenypings.length === 0) return;
    currentTeenypingIndex++;
    if (currentTeenypingIndex >= filteredTeenypings.length) {
        currentTeenypingIndex = 0;
    }
    updateCounter();
    highlightCurrentCard();
}

// Update the counter display
function updateCounter() {
    currentCount.textContent = filteredTeenypings.length > 0 ? currentTeenypingIndex + 1 : 0;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchTeenypingsData);
