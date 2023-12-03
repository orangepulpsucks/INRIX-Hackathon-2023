import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useContext } from "react";
import { VisibleContext } from "../contexts/VisibleContext";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNob2xsYW5kYWlzZSIsImEiOiJjbHBwMzh4N3AwdGoyMmpvdjJlejBpZXRyIn0.a4uwm9INFCWfL3lbmVH-bg";

const locations = [
  [-122.41025, 37.80889, "Fog Harbor"],
  [-122.393303, 37.795831, "Hog Island"],
  [-122.41450866001664, 37.78843914681705, "Liholiho Yacht Club"],
  [-122.4225, 37.79338, "House of Prime Rib"],
  [-122.399661, 37.796996, "Kokkari Estiatorio"],
];

const Mapbox: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { visible, visibleRoute } = useContext(VisibleContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.41023486259604, 37.79524589212828],
      zoom: 14.3,
    });

    /************************* INRIX API - WORKING ***************************/
    // const authorizationToken =
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InJ4MjM0b3c5cTciLCJ0b2tlbiI6eyJpdiI6IjEyNWU5ZWFkMWY0OTQ0NDUzN2YwMzM2NDgxZmVlODJmIiwiY29udGVudCI6ImExOTlkZDU4NmJiMDhjNjQwYzQxMDI5Y2FmNGM4N2MwNTc2OTNmNWMxYWMyMzY3Y2U1NDgyNmVlZDBkNGEzZTEyM2FlY2ZkMmFkZDBkYzZjZjJkOWYyZGFmNjkyNTg4OWIwZDg2ZjcyMTVlN2NkMTBiYzEyMjM2ZGJlYjE5NmVmYzkxYmY0NTliNzJjOTAyYmRjYjJiMmQ0OGU3ZGY2NjhiN2IzZDE1NzVhYjAzMzQ5YjY2MTk4ZmU0NjhiZWE0ZTM1MDBjYTRmNGE3MDI2YmRhY2MyNGMwYjQyYTA0Yzk5YmJiZmEzOTY3MDBmOTQyZjYxOGYxODM0NDQyZjQzZDY0Zjk3ZmExMGMyYTFmMGM3ZmY1YTJjYzExYWRjNGY4NTFiMDYyMDgxZGMwMmNkYjdkYjA4NzY4MzhhMWExZDA3MzE0NmVhNmM1ZDVjMGRjNzI0ZDdhMThjMmUyOGE2YmE5NWQ2MjgwNTE3ZjU0MzgyMjlmZDA1ZWNkZDlhODNlZTA4ZjQ3MGY0N2UzMzI2YzkyY2I3YzA4MjkwZmRkNWZiNDY0ZGRhNDNhOWU3N2FmNGZjZDU1YTY2MDJiY2FjMGZmOGE5ZDYzYzBmNDRkN2E1ZjM5MTZhNTM5NDQxNzJlMzE3NTYxNGU0ZjJmOTVjMWNjMDBmMWIxZWE4MGQyY2E3YTJmYzJhN2ZlMTliNjUyZDU2MmFjMWJkMzk3YzVlYzY1MmViZWEzNWM4Njg2YzM2M2IzMDI1N2NkZTA5ZTcyZWIwYzRiZTNlNzc5NjBiNzM4YTA5ODY4Y2YyOTJmNTgxNGY4MTIyYTY1MmQ4MGJkMDdlY2IzYTRlZmZiZTI5ZjYzOTczNDFmNDRkYTg0NjFlYzIifSwic2VjdXJpdHlUb2tlbiI6eyJpdiI6IjEyNWU5ZWFkMWY0OTQ0NDUzN2YwMzM2NDgxZmVlODJmIiwiY29udGVudCI6ImEzYjhmNjQ3NGNiYmJkNGIxMTcwMGY5Yzk4NzlhZGJhN2YzNTFhNGI2Yjg2MGYwYWM3M2MwNGIzZjVlYjkxZmI0MmJjYjI4Y2ZiZjA5MDdlZTJlZGRkZTQifSwianRpIjoiOTc0MjAzYzgtMWQyNS00NWFkLTg3OTUtYzMzNTVmMGUyYjgwIiwiaWF0IjoxNzAxNTkzNjE4LCJleHAiOjE3MDE1OTcyMTd9.XY5vBFHHDxHX7GVv7U9glmcTiIvU7sh2cqw_iBV5wRs";

    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", authorizationToken);

    // const requestOptions: RequestInit = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // interface Waypoint {
    //   geometry: {
    //     coordinates: number[]; // Assuming coordinates is an array of numbers
    //   };
    // }

    // fetch(
    //   "https://api.iq.inrix.com/findRoute?wp_1=37.819929,-122.478255&wp_2=37.809531,-122.410151&format=json",
    //   requestOptions,
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     const coordinates = result?.result?.trip?.wayPoints?.map(
    //       (waypoint: Waypoint) => waypoint?.geometry?.coordinates[0],
    //     );

    //     if (coordinates && coordinates.length >= 2) {
    //       const lineStringFeature: Feature<LineString> = {
    //         type: "Feature",
    //         geometry: {
    //           type: "LineString",
    //           coordinates: coordinates,
    //         },
    //         properties: {},
    //       };

    //       map.on("load", () => {
    //         map.addSource("route", {
    //           type: "geojson",
    //           data: lineStringFeature,
    //         });
    //         console.log("A");
    //         map.addLayer({
    //           id: "route",
    //           type: "line",
    //           source: "route",
    //           layout: {
    //             "line-join": "round",
    //             "line-cap": "round",
    //           },
    //           paint: {
    //             "line-color": "#FF0000",
    //             "line-width": 12,
    //           },
    //         });
    //         console.log("B");
    //       });
    //     }
    //   })
    //   .catch((error) => console.log("error", error));
    /****************************************************************/

    // fake map code

    // static contextType = visibleContext;

    if (visible) {
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
    } else {
    }

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
      console.log(visibleRoute);
      if (visibleRoute) {
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
      }
    });

    // Cleanup the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, [visible, visibleRoute]); // Empty dependency array means this effect runs once after the initial render

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default Mapbox;
