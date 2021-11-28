import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";


/**
 ** MapContainer now not working
 ** For work need fix webpack config for .js files and node_modules
**/

const Map = () => {
    const { IS_CLIENT } = process.env;

    return IS_CLIENT && (
        <div>Future map</div>
        // <MapContainer center={[51.505, -0.09]} zoom={10}>
        //     <TileLayer
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />
        // </MapContainer>
    )
}

export default Map;