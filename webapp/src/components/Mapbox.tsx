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

    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [-122.41580962523275, 37.782433947124346],
              [-122.41850156234553, 37.79630265687568],
              [-122.4103222149648, 37.797407132462666],
              [-122.41089166320018, 37.8009249816739],
              [-122.41694852170355, 37.80513799919643],
              [-122.41751796993896, 37.80808287843996],
              [-122.41265177592759, 37.80849188015806],
            ],
            type: "LineString",
          },
        },
      ],
    };
    map.on("load", function () {
      map.addLayer({
        id: "line",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#7e5bef",
          "line-width": 5,
        },
      });
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
