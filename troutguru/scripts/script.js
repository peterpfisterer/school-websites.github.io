"use strict"

var map;
const electricBlue = '3BF4FB';

function initMap(position) {

    //grab user location
    const myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
    //initialize map
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeId: 'satellite',
        mapId: 'd889de2aee37fac6'
    });

    //display page once map is loaded
    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
        document.getElementById("loading").style.display = "none";
        document.getElementById("footer").style.display="block";
        document.getElementById("map").style.display = "block";
    });

    //initialize SVG icons
    const userSVG = {
        path: "M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z",
        fillColor: "turquoise",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: .08,
        anchor: new google.maps.Point(120, 480)
    };
    const locationSVG = {
        path: "M180.5 141.5C219.7 108.5 272.6 80 336 80C399.4 80 452.3 108.5 491.5 141.5C530.5 174.5 558.3 213.1 572.4 241.3C577.2 250.5 577.2 261.5 572.4 270.7C558.3 298 530.5 337.5 491.5 370.5C452.3 403.5 399.4 432 336 432C272.6 432 219.7 403.5 180.5 370.5C164.3 356.7 150 341.9 137.8 327.3L48.12 379.6C35.61 386.9 19.76 384.9 9.474 374.7C-.8133 364.5-2.97 348.7 4.216 336.1L50 256L4.216 175.9C-2.97 163.3-.8133 147.5 9.474 137.3C19.76 127.1 35.61 125.1 48.12 132.4L137.8 184.7C150 170.1 164.3 155.3 180.5 141.5L180.5 141.5zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z",
        fillColor: "palegreen",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: .08,
        anchor: new google.maps.Point(200, 350)
    }

    //Add user marker using location
    const user = new google.maps.Marker({
        position: myLatLng,
        map,
        title:"You",
        icon: userSVG,
    });
    addMarkers();


    //add location markers to map
    function addMarkers() {
        fetch("../testdata.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.locations.forEach(spot => {
                const spotLatLng = { lat: spot.latitude, lng:spot.longitude}
                const locationMarker = new google.maps.Marker({
                    position: spotLatLng,
                    map,
                    title: spot.name,
                    icon: locationSVG
                });
                attachInfo(locationMarker, spot.name, spot.rating)
            });
        });

    }

    //attaches location information to each marker
    function attachInfo(marker, name, rating) {
        const infowindow = new google.maps.InfoWindow({
            content: "Spot Name: " + name + "<br>Rating: " + rating + "/5"
        });

        marker.addListener("click", () => {
            infowindow.open(marker.get("map"), marker);
        });
    }


}

document.addEventListener("DOMContentLoaded", () => {

    //initialize map once document is loaded
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    } else {
        console.log("Locational services are not supported in this browser.");
    }

});
