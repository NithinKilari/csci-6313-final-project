// Global variables
let map;
let service;
let infoWindow;
let markers = []; // Array to store markers

// 1. This function is called by the Google Maps script when it's loaded
function initMap() {
  // Set a default location (Oklahoma City)
  const okc = new google.maps.LatLng(35.4676, -97.5164);

  // Create the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: okc,
    zoom: 13,
  });

  // Create an InfoWindow (the popup when you click a marker)
  infoWindow = new google.maps.InfoWindow();

  // Create the Places service
  service = new google.maps.places.PlacesService(map);

  // Get the search elements
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  // Add event listeners for the search (click button OR press "Enter")
  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  });
}

// 2. This function runs when the user searches
function performSearch() {
  const query = document.getElementById("searchInput").value;
  if (!query) return; // Don't search if the bar is empty

  clearResults(); // Clear old markers and cards

  // UPDATED: We ask for more data: rating, user_ratings_total, and opening_hours
  const request = {
    query: query,
    fields: [
      "name",
      "formatted_address",
      "geometry",
      "place_id",
      "rating",
      "user_ratings_total",
      "opening_hours",
    ],
  };

  // Perform the text search
  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      // Pan the map to the first result
      map.setCenter(results[0].geometry.location);

      // Part 3 Requirement: Get only the first 5 results
      const top5Results = results.slice(0, 5);

      // Create a card and marker for each result
      for (let i = 0; i < top5Results.length; i++) {
        createMarker(top5Results[i]);
        createResultCard(top5Results[i]);
      }
    } else {
      document.getElementById("resultsGrid").innerHTML = "<p>No results found.</p>";
    }
  });
}

// 3. This function creates a marker on the map
function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    title: place.name,
    animation: google.maps.Animation.DROP,
  });

  // When you click the marker, open the InfoWindow
  google.maps.event.addListener(marker, "click", () => {
    infoWindow.setContent(
      `<div><strong>${place.name}</strong><br>${place.formatted_address}</div>`
    );
    infoWindow.open(map, marker);
  });

  // Store the marker so we can clear it later
  markers.push(marker);
}

// 4. This function creates a card in the HTML
function createResultCard(place) {
  const resultsGrid = document.getElementById("resultsGrid");

  // We re-use the "card" style from your CSS
  const card = document.createElement("div");
  card.className = "card map-card";

  // --- NEW: Build the card content ---

  // 1. Add the place name
  let content = `<h3>${place.name}</h3>`;

  // 2. Add the rating (if it exists)
  if (place.rating) {
    content += `
      <div class="rating">
        <span class="rating-number">${place.rating}</span>
        ${getStarRating(place.rating)} 
        <span class="rating-total">(${place.user_ratings_total})</span>
      </div>
    `;
  }

  // 3. Add the address
  content += `<p class="address">${
    place.formatted_address || "Address not available"
  }</p>`;

  // 4. Add the Open/Closed status
  if (place.opening_hours) {
    if (place.opening_hours.open_now) {
      content += `<span class="status open">Open now</span>`;
    } else {
      content += `<span class="status closed">Closed</span>`;
    }
  }
  // --- End of new content ---

  card.innerHTML = content;

  // Part 3 Requirement: Clicking the card focuses the marker
  card.addEventListener("click", () => {
    map.setCenter(place.geometry.location);
    map.setZoom(15);

    // Find the matching marker and "click" it
    for (const marker of markers) {
      if (marker.title === place.name) {
        new google.maps.event.trigger(marker, "click");
      }
    }
  });

  resultsGrid.appendChild(card);
}

// 5. This function clears old search results
function clearResults() {
  // Remove all markers from the map
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = []; // Empty the array

  // Clear all result cards from the grid
  document.getElementById("resultsGrid").innerHTML = "";
}

// 6. NEW: Helper function to generate star icons
function getStarRating(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  // Add half star
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  // Add empty stars
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}
