import * as React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  position: [number,number];
}

const Map : React.FC<MapProps> = ({position}) => {
  const [map,setMap] = React.useState(null);

  React.useEffect(()=>{
    if(!map) return;
    
    map.flyTo(position);
  },[map,position])
  
  return (
    <MapContainer 
      style={{minHeight: "400px"}}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      whenCreated={(map)=>setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
}

export default Map;