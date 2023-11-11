import React, {useEffect} from "react";


function ContentPage() {
    useEffect(() => {
        const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              zoom: 13,
              center: { lat: 51.501904, lng: -0.115871 },
            }
            );
        const transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
    }
    , []);
    return (
        <div>
        <h1>Content Page</h1>
        <div id="map" style={{ height: "400px" }}></div>
        </div>
    );
}

function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: { lat: 51.501904, lng: -0.115871 },
      }
    );
  
    const transitLayer = new google.maps.TransitLayer();
  
    transitLayer.setMap(map);
}

declare global {
interface Window {
    initMap: () => void;
}
}
window.initMap = initMap;

export default ContentPage;