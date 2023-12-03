import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNob2xsYW5kYWlzZSIsImEiOiJjbHBvbDVnZDQwcjkxMmtvdmdhMXoxa2s0In0.4QjXc8x7BaC2LFI8yra0eA";

const Mapbox: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.44, 37.73],
      zoom: 9,
    });

    // Add any additional customization or features here

    // Cleanup the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Mapbox;
