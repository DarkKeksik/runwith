import React from "react";
// import { ShapeFile } from "react-leaflet-shapefile";

import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";

interface PropsInterface {
    center?: Array<number>,
    zoom?: number,
    scrollWheelZoom?: boolean
}

const Map = ({
    center,
    zoom,
    scrollWheelZoom
}: PropsInterface) => {

    const { IS_CLIENT } = process.env;
    if ( !IS_CLIENT ) return null;

    const {
        MapContainer, TileLayer,
        FeatureGroup, LayersControl,
        LayersControl: { BaseLayer, Overlay  }
    } = require("react-leaflet");

    return (
        <MapContainer
            className={styles.map}
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            preferCanvas={true}
        >
            <LayersControl>
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </BaseLayer>

                {/*<Overlay checked name='Feature group'>*/}
                {/*    <FeatureGroup color='purple'>*/}
                {/*        <ShapeFile isArrayBufer={true}/>*/}
                {/*    </FeatureGroup>*/}
                {/*</Overlay>*/}
            </LayersControl>
        </MapContainer>
    )
}


Map.defaultProps = {
    center: [59.93584, 30.30],
    zoom: 10,
    scrollWheelZoom: true
}


export default Map;