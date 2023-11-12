import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';



function ContentPage() {
    MapProvider();
    return (
        <div>
            <h1>Content Page</h1>
            <div id="map" style={{ height: "400px" }}></div>
        </div>
    );
}

async function MapProvider() {
    const loader = new Loader({

        apiKey: "AIzaSyBJgSPGxD5sB7LhOHQtXABeVu1GDZ2mWo4",
        version: "weekly",
    });

    loader.load().then(async () => {
        const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            
            {
                zoom: 13,
                center: { lat: 47.37333184, lng: 8.53749785 },
            }
            ) 
        // Now i want to add the file mygeodata_merged.json to the map var

        // Add GeoJSON
        // Read the file
        const transitLayer = new google.maps.TransitLayer();
        const mygeodata_merged =await getGeoJson()
        map.data.addGeoJson(mygeodata_merged);
        
        transitLayer.setMap(map);
        console.log(mygeodata_merged)})
};

async function getGeoJson() {
    const mygeodata_merged = await fetch("/api/density_map").then((res) => res.json());
    console.log(mygeodata_merged)
    return mygeodata_merged;
}

export default ContentPage;