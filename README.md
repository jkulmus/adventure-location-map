# Overview

As a software development student, I am continuing to build a personal software portfolio that demonstrates my growth in programming concepts, web development, and mapping technologies. This project is an Adventure Location Map website that uses ArcGIS JavaScript API to display adventure-related locations on an interactive map.

The software demonstrates sever core TypeScript concepts including:
- Interactive map creation
- Location markers
- Latitude and longitude coordinates
- Popup information windows
- Multiple marker categories
- Color-coded GIS data
- Map legend design

The map includes parks, trails, campgrounds, and attractions around the Tri-Cities region. Each marker displays a popup with information about the location when clicked.

The purpose of this project is to learn about and strengthen my understanding of GIS mapping, ArcGIS, JavaScript map libraries, and location-based data visualization.


[Software Demo Video](https://youtu.be/2c_QM5vDVno)

# Development Environment

I used Visual Studio Code as my primary code editor and GitHub to publish my project to a public repository. 

This project was developed using:
- HTML
- CSS
- JavaScript
- ArcGIS JavaScript API
- GitHub

My application runs in the browser using Live Server in Visual Studio Code

# Useful Websites

* [ArcGIS JS API Docs](https://developers.arcgis.com/javascript/latest/)
* [ArcGIS JS Tutorials](https://developers.arcgis.com/javascript/latest/tutorials/)
* [ArcGIS MapView Docs](https://developers.arcgis.com/javascript/latest/references/core/views/MapView/)
* [ArcGIS Graphic Docs](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)
* [MDN JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Google Maps](https://www.google.com/maps)


# Features

- Interactive ArcGIS map
- 20 adventure-related location markers
- Marker popups with location information
- Color-coded marker categories
- Map legend
- Parks, trails, campgrounds, and attractions
- Real-world latitude and longitude coordinates
- Organized JavaScript location data array
- Automatically generated markers using a loop

# How to Run the Program

1. Download or clone the respoistory
2. Open the project folder in Visual Studio Code
3. Install the Live Server extension if needed
4. Right-click index.html
5. Select Open with Live Server
6. The map will open in the browser

# Future Plans

In the future, I would like to add:
- Add a filter so users can show or hide specific marker categories
- Add more locations
- Improve mobile responsiveness
- Add custom marker icons
- Connect marker data to a database or external API
- Add search functionality

# Time Spent

I spent approximately 16 hours researching ArcGIS, setting up the project, creating the map, collecting location data, verifying coordinates, adding markers, building popups, styling the page, creating the legend, documenting the project, and preparing the final video demonstration.

# Learning Strategies

- I started by getting a simple ArcGIS map working before adding more complex features. After the map loaded correctly, I added one marker and tested the popup before expanding to the full set of locations
- Verifying coordinates was also an important part of my project. I learned that even small coordinate differences can place a marker in the wrong location, so I used maps to check and adjust location data
- One strategy I would improve in future modules is gathering and organizing all location data earlier before writing the full code. It would make the marker creation process faster and reduce the amount of coordinate correction needed later.

# Challenges and Improvements

One major challenge I had was getting the ArcGIS map to display correctly in the browser. I had to make sure the map container, CSS, ArcGIS script, and JavaScript file were all connected properly.

Another challenge was placing markers accurately. I overcame this by checking real-world coordinates and adjusting marker locations until they matched the intended places on the map

# Stretch Challenge

For the stretch challenge, I included more than one type of data on the map using different marker colors. The map includes parks, trails, campgrounds, and attractions. Each category uses a different marker color, and the legend explains what each color represents