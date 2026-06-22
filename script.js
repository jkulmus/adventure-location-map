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

    const locations = [

        // PARKS

        {
            name: "Howard Amon Park",
            type: "park",
            longitude: -119.27058,
            latitude: 46.27349,
            description: "Popular riverfront park in Richland"
        },

        {
            name: "Columbia Park",
            type: "park",
            longitude: -119.14554,
            latitude: 46.2224,
            description: "Large riverside park with trails and recreation areas"
        },

        {
            name: "Leslie Groves Park",
            type: "park",
            longitude: -119.2622,
            latitude: 46.311,
            description: "Scenic waterfront park along the Columbia River"
        },

        {
            name: "Chiawana Park",
            type: "park",
            longitude: -119.20915,
            latitude: 46.2456,
            description: "Family-friendly riverside park in Pasco"
        },

        {
            name: "Sacagawea State Park",
            type: "park",
            longitude: -119.0408,
            latitude: 46.2014,
            description: "Historic state park at the confluence of two rivers"
        },

        // TRAILS

        {
            name: "Badger Mountain Trail",
            type: "trail",
            longitude: -119.3072,
            latitude: 46.2376,
            description: "Popular hiking trail with panoramic views"
        },

        {
            name: "Candy Mountain Trail",
            type: "trail",
            longitude: -119.3485,
            latitude: 46.2470,
            description: "Moderate trail with scenic overlooks"
        },

        {
            name: "Sacagawea Heritage Trail",
            type: "trail",
            longitude: -119.2385,
            latitude: 46.2663,
            description: "Multi-use trail along the Columbia River"
        },

        {
            name: "Chamna Trail",
            type: "trail",
            longitude: -119.2868,
            latitude: 46.2577,
            description: "Nature preserve trail through native habitat"
        },

        {
            name: "Twin Sisters Trail",
            type: "trail",
            longitude: -119.3470,
            latitude: 46.2360,
            description: "Hiking area with ridge views near Badger Mountain"
        },

        // CAMPGROUND 

        {
            name: "Hood Park",
            type: "campground",
            longitude: -119.0148,
            latitude: 46.2148,
            description: "Popular campground with river access"
        },

         {
        name: "Fishhook Park",
        type: "campground",
        longitude: -118.7658,
        latitude: 46.3156,
        description: "Camping and boating recreation areas"
        },

        {
            name: "Plymouth Park",
            type: "campground",
            longitude: -119.3461,
            latitude: 45.9335,
            description: "Campground and marina on the Columbia River"
        },

        {
            name: "Charbonneau Park",
            type: "campground",
            longitude: -118.8446,
            latitude: 46.2562,
            description: "Campground with fishing and boating access"
        },

        {
            name: "Crow Butte Park",
            type: "campground",
            longitude: -119.8521,
            latitude: 45.8551,
            description: "Riverside campground and recreation areas"
        },

        // ATTRACTIONS

        {
            name: "REACH Museum",
            type: "attraction",
            longitude: -119.2165,
            latitude: 46.236,
            description: "Museum showcasing regional history and science"
        },

        {
            name: "Gesa Carousel of Dreams",
            type: "attraction",
            longitude: -119.1863,
            latitude: 46.1809,
            description: "Historic hand-carved carousel attraction"
        },

        {
            name: "Clover Island Lighthouse",
            type: "attraction",
            longitude: -119.1162,
            latitude: 46.2177,
            description: "Iconic lighthouse overlooking the Columbia River"
        },

        {
            name: "Franklin County Historical Museum",
            type: "attraction",
            longitude: -119.0931,
            latitude: 46.2328,
            description: "Museum preserving local history and artifacts"
        },

        {
            name: "Hanford Reach Visitor Area",
            type: "attraction",
            longitude: -119.3007,
            latitude: 46.3186,
            description: "Visitor area for the Hanford Reach National Monument"
        }
    ];

    function getMarkerColor(type) {
        switch (type) {
            case "park":
                return "green";
            case "trail":
                return "blue";
            case "campground":
                return "brown";
            case "attraction":
                return "red";
            default:
                return "gray";
        }
    }

    locations.forEach(location => {
        const point = {
            type: "point",
            longitude: location.longitude,
            latitude: location.latitude
        };

        const markerSymbol = {
            type: "simple-marker",
            color: getMarkerColor(location.type),
            size: 12
        };

        const popupTemplate = {
            title: location.name,
            content: location.description
        };

        const pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
            popupTemplate: popupTemplate
        });

        view.graphics.add(pointGraphic);
    });

});