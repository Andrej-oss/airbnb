import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Apartment } from "../models/Apartment";

export function MapI({apartments}: { apartments: Apartment[] }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = apartments.map(apartment => ({
    longitude: apartment.long,
    latitude: apartment.lat
  }));
  console.log(selectedLocation);
  const center = getCenter(coordinates);
  return (
      <>
        <ReactMapGL
            initialViewState={{
              longitude: center.longitude,
              latitude: center.latitude,
              zoom: 12
            }}
            style={{
              width: "100%",
              height: "100%"
            }}
            mapStyle={process.env.mapbox_url}
            mapboxAccessToken={process.env.mapbox_key}
        >
          {apartments && apartments.map(apartment => (
              <div key={apartment.id} className="cursor-pointer">
                <Marker
                    key={apartment.lat}
                    longitude={apartment.long} latitude={apartment.lat}>
                  <p role='image'
                     aria-lable='push-pin'
                      className='cursor-pointer text-2xl animate-bounce'
                      onClick={() => setSelectedLocation(apartment)}>
                    📌
                  </p>
                </Marker>
                {selectedLocation.long === apartment.long ? (
                    <Popup
                        key={apartment.id}
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        longitude={apartment.long}
                        latitude={apartment.lat}
                        anchor="bottom"
                    >
                      {apartment.title}
                    </Popup>
                ) : (false)}
                {/*<Popup*/}
                {/*    // onClose={() => setSelectedLocation({})}*/}
                {/*    closeOnClick={true}*/}
                {/*    longitude={selectedLocation.long}*/}
                {/*    latitude={selectedLocation.lat}>*/}
                {/*  {selectedLocation.title}*/}
                {/*</Popup>*/}
              </div>
          ))}
        </ReactMapGL>
      </>
  );
}

export default MapI;