import React from 'react';
import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	TileLayer,
	Marker,
	useMap,
	LayerGroup,
	Circle,
} from 'react-leaflet';
import L from 'leaflet';
import customMarker from '../images/icon-location.svg';

const Maps = ({ latlng }) => {
	const custIcon = new L.icon({
		iconUrl: customMarker,
		iconSize: [28, 35],
		className: 'leaflet-icon',
	});

	const NewMarker = () => {
		const map = useMap();
		map.flyTo(latlng, 12, 3);
		return null;
	};

	return (
		<div className='Maps-Container'>
			<MapContainer
				className='leaflet'
				center={[39, -97]}
				zoom={4.5}
				zoomControl={false}>
				{latlng && <NewMarker latlng={latlng} />}
				<TileLayer
					attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=VeDdzcmsAkeVK73Kc92NNvvVMoZW1MwB9K42flSZ6tRG7LUh1etwuUNBoo0vZvPU'
				/>
				{latlng && (
					<LayerGroup>
						<Marker position={latlng} icon={custIcon} />
						<Circle
							center={latlng}
							pathOptions={{ color: 'black', fillColor: 'black' }}
							radius={5000}
							stroke={false}
						/>
					</LayerGroup>
				)}
			</MapContainer>
		</div>
	);
};

export default Maps;
