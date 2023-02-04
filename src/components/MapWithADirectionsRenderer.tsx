import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
} from "@react-google-maps/api";
import React, { useEffect, useRef } from "react";
function MapWithADirectionsRenderer({
  origin,
  destination,
}: {
  origin: any;
  destination: any;
}) {
  const mapRef = useRef<any>();

  useEffect(() => {
    if (mapRef != undefined) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 7,
        center: origin,
      });
      directionsRenderer.setMap(map);
      directionsService.route(
        {
          origin,
          destination,
          travelMode: "DRIVING" as google.maps.TravelMode,
        },
        (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [destination, origin]);

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", overflow: "hidden" }}
    />
  );
}
// function MapWithADirectionsRenderer() {
//   const [response, setResponse] = useState();
//   const [destination, setDestination] = useState("delhi");
//   const [origin, setOrigin] = useState("mumbai");
//   function directionsCallback(response: any) {
//     console.log(response);
//     if (response !== null) {
//       if (response.status === "OK") {
//         setResponse(response);
//       } else {
//         console.log("response: ", response);
//       }
//     }
//   }

//   return (
//     <GoogleMap
//       // required
//       id="direction-example"
//       // required
//       mapContainerStyle={{
//         height: "400px",
//         width: "100%",
//       }}
//       // required
//       zoom={2}
//       // required
//       center={{
//         lat: 0,
//         lng: -180,
//       }}
//       // optional
//       //   onClick={this.onMapClick}
//       // optional
//       onLoad={(map) => {
//         console.log("DirectionsRenderer onLoad map: ", map);
//       }}
//       // optional
//       onUnmount={(map) => {
//         console.log("DirectionsRenderer onUnmount map: ", map);
//       }}
//     >
//       {destination !== "" && origin !== "" && (
//         <DirectionsService
//           // required
//           options={{
//             // eslint-disable-line react-perf/jsx-no-new-object-as-prop
//             destination: destination,
//             origin: origin,
//             travelMode: "DRIVING" as google.maps.TravelMode,
//           }}
//           // required
//           callback={directionsCallback}
//           // optional
//           onLoad={(directionsService: any) => {
//             console.log(
//               "DirectionsService onLoad directionsService: ",
//               directionsService
//             );
//           }}
//           // optional
//           onUnmount={(directionsService: any) => {
//             console.log(
//               "DirectionsService onUnmount directionsService: ",
//               directionsService
//             );
//           }}
//         />
//       )}

//       {response !== null && (
//         <DirectionsRenderer
//           // required
//           options={{
//             // eslint-disable-line react-perf/jsx-no-new-object-as-prop
//             directions: response,
//           }}
//           // optional
//           onLoad={(directionsRenderer: any) => {
//             console.log(
//               "DirectionsRenderer onLoad directionsRenderer: ",
//               directionsRenderer
//             );
//           }}
//           // optional
//           onUnmount={(directionsRenderer: any) => {
//             console.log(
//               "DirectionsRenderer onUnmount directionsRenderer: ",
//               directionsRenderer
//             );
//           }}
//         />
//       )}
//     </GoogleMap>
//   );
// }

export default MapWithADirectionsRenderer;
