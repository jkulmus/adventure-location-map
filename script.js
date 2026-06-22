require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic"
], function(Map, MapView, Graphic) {

    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-119.1372, 46.2857],
        zoom: 10
    });

    const point = {
        type: "point",
        longitude: -119.27058,
        latitude: 46.27349
    };

    const markerSymbol = {
        type: "simple-marker",
        color: "green",
        size: 12
    };

    const popupTemplate = {
        title: "Howard Amon Park",
        content: "Popular riverfront park in Richland, Washington."
    };

    const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        popupTemplate: popupTemplate
    });

    view.graphics.add(pointGraphic);

});