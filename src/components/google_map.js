import React, { Component } from 'react';

class GoogleMap extends Component {
  // Life cycle method: gets called automatically
  // after this component has been rendered to the screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, { // reference to the html node
      zoom: 10,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
