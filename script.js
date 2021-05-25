mapboxgl.accessToken =
  "pk.eyJ1IjoibW9qaWIyMDE0IiwiYSI6ImNrcDRlcHNlYjBlaHQydXB0MHJlanZtOWQifQ.A4PdWnnK1S1CYpZr7kWrBQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 30.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 13,
  });

  // Add zoom and rotation controls to the map.
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
