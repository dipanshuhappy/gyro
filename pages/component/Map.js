import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYWJoaWtkYXM3NDIxIiwiYSI6ImNrdm0zeHd0djNtOHQzMXBnbHJqdm5heWsifQ.HnWIyuSx-FU8CUObGzMgcg";

const Map = (props) => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",

			//Indian Map
			center: [78.9629, 20.5937],
			zoom: 3,
		});

		if (props.pickupCoordinates) {
			addToMap(map, props.pickupCoordinates);
		}

		if (props.dropoffCoordinates) {
			addToMap(map, props.dropoffCoordinates);
		}

		if (props.pickupCoordinates && props.dropoffCoordinates) {
			map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
				padding: 60,
			});
		}
	}, [props.pickupCoordinates, props.dropoffCoordinates]);

	const addToMap = (map, coordinates) => {
		// Create a default Marker and add it to the map.
		const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

	return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`;
