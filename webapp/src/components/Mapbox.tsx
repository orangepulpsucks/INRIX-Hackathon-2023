import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { Feature, LineString } from "geojson";
import.meta.env.CLIENT_MAPBOX_KEY;

/******************** MAPBOX ***********************/
mapboxgl.accessToken = import.meta.env.CLIENT_MAPBOX_KEY;

const MapboxWithRoute: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4194, 37.7749],
      zoom: 13,
    });

    /******************** INRIX - hardcoded for now... ***********************/
    const authorizationToken =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InJ4MjM0b3c5cTciLCJ0b2tlbiI6eyJpdiI6ImFiZjE0MTdjM2NmZTMyY2YwNTQwZjcxZTlmYTg3MDc0IiwiY29udGVudCI6IjkzYTcwYmQ5NzgwMzQyNDY5NmI1YjI2Mzk4MjMwZjlmNmY3ZTUzN2QwZDMwMDViNDNiN2RkN2E2MzVhYWMxNTcwZWZiYjcwZTY4YTU0NDMzOTlhYjg3ZTQ5OTY2MzU0ZDg5YjFjMTQ2MDk1NzRhZmFiY2E5MmRlYzgzZDcyZWE2NmM5NzI3OTgzYTBhNzA2NTg2ZTczYWMxNDE5ZDY0MjFiZTQwNjc2YmI4MTQ2YzdkNGQ0NzU3YjQ5MzUxNzQ2MTA5MjBmODUxZTY5Yjg5NmVlN2U0YWM2MWFiZTY5M2I4YjM0N2UzNWM2OTJhYzVkOWQ3OTg0NWQzYzhlNTI5YWI1NDQ0NWY2MjM5MDUyOTg0ZTBhYjY0YmUxMjdmNjU2YjM0M2RmZTQyNDVkM2NiN2U0ODI0NWZjYzRmZmZkMmI0NmViMDMyODVkM2M5M2E1ZDI1ZDFiMjYzNGUwZWY4MWFjM2Q0MGMyOWE1NzZlOGVjZjFmZTlmN2QxMTMyNTJhODJiZDJlMjFjN2QyN2RkMzUzY2I4ZjUzOWZmN2U0MTFmZjgzYjkyNzc0N2E1MjcwYjI5OGY2YWZhZTY4OTgxMzZlYjQzYmNjNmFhMWJmMzUyYjRlZTNlYjBlZDM1ZTIyN2FjMDNlNzVmZjZiZDEwYWQ4MWRkOWU0ODcyY2VjMmMyODIyNTYzZGM4ZjU0ZGZlNzE1YmEwZTQxOTI4Yzc3ZjMyZDc3NzA2MTMxZTFjNDhhMDJlNWZlZWQ3NDJmZjg1ZTNhYjVmMGUwMTBmMDkwODNlNDU5NTI1YjRiYWY5ZmNiNmE3YmY3MzgwNjM0ZmNkYzFmMjMwMjBhNDQ2YTg5YTFmODRhYmYxYmFmMjgzZjBmMDc1YTVkIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiJhYmYxNDE3YzNjZmUzMmNmMDU0MGY3MWU5ZmE4NzA3NCIsImNvbnRlbnQiOiI5YjhjMmVmYzRmMmQ1OTYxOTZhZWIxNjlmZDE3MTJjNzY2NDQ0YzQwMDM2YTdhZTU3MjZlZWJmOTRiOTA4OTQzMmRkNmIzNTMyNWI2MTAxNWM5Yjk4YWRhIn0sImp0aSI6IjNlMmFmYzJmLTAyMTQtNDE2Ny05NmIyLTQxZDhlYTU4ZDYwOCIsImlhdCI6MTcwMTU3MTQ5MSwiZXhwIjoxNzAxNTc1MDkxfQ.mgE2EnoqvoNd93wOJYuU-9oYzPpgRojQJs6IrUjmII0"; // your token here

    const myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationToken);

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.iq.inrix.com/findRoute?wp_1=37.819929,-122.478255&wp_2=37.809531,-122.410151&format=json",
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    /**************************************************/
    // Cleanup the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
};

export default MapboxWithRoute;
