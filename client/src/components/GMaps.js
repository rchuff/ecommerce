import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps';

//Map component for Google Maps. Default center and marker placed
//at order location.
const Map = withScriptjs(withGoogleMap(props => (
  <div>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.location[0],lng: props.location[1]}}
    >
    <Marker position={{ lat: props.location[0],lng: props.location[1]}} />
    </GoogleMap>
  </div>
)));


export default function GMaps(props){
  return (
    <div style={{
      width: '50vw',
      height: '50vh',
      margin: "auto"
    }}>
      <Map
        title={props.title}
        location={props.location}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDTuJCB4eWdnFlpf2_aqwMHI8B4KoDDscI`}
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '100%'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    </div>
  )
}
