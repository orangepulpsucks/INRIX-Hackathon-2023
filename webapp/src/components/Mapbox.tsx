import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNob2xsYW5kYWlzZSIsImEiOiJjbHBwMzh4N3AwdGoyMmpvdjJlejBpZXRyIn0.a4uwm9INFCWfL3lbmVH-bg";

const Mapbox: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.41023486259604, 37.79524589212828],
      zoom: 13,
    });

    // Fog Harbor
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.41025, 37.80889])
      .addTo(map);

    // Hog Island
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.393303, 37.795831])
      .addTo(map);

    // Liholiho Yacht Club
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.41450866001664, 37.78843914681705])
      .addTo(map);

    // House of Prime Rib
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.4225, 37.79338])
      .addTo(map);

    // Kokkari Estiatorio
    var marker = new mapboxgl.Marker()
      .setLngLat([-122.399661, 37.796996])
      .addTo(map);

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
