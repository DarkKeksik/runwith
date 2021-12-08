import React from "react";
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

    const MapContainer = require("react-leaflet").MapContainer;
    const TileLayer = require("react-leaflet").TileLayer;
    const Marker = require("react-leaflet").Marker;
    const Popup = require("react-leaflet").Popup;

    return (
        <MapContainer
            className={styles.map}
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            preferCanvas={true}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[59.93584, 30.30]}>
                <Popup>Тест маркера</Popup>
            </Marker>
        </MapContainer>
    )
}


Map.defaultProps = {
    center: [59.93584, 30.30],
    zoom: 10,
    scrollWheelZoom: true
}


export default Map;