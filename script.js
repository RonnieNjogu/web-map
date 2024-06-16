// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker with a custom popup
var marker = L.marker([51.5, -0.09]).addTo(map);

marker.bindPopup(`
    <div class="popup-content">
        <div class="popup-title">Custom Popup Title</div>
        <div>This is a custom popup content with more information.</div>
    </div>
`).openPopup();

// Add another marker with a different popup
var anotherMarker = L.marker([51.51, -0.1]).addTo(map);

anotherMarker.bindPopup(`
    <div class="popup-content">
        <div class="popup-title">Another Popup</div>
        <div>Here is some more custom content for this popup.</div>
    </div>
`);
