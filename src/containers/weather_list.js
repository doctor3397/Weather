import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // console.log(temps); [291.17, 289.62, 288.6...]

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="green" units="°C" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="red" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Google Map</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) { // ({ weather })
  return { weather: state.weather }; // return { weather };
}

export default connect(mapStateToProps)(WeatherList);

// weather: [
//   city: {name: 'toronto'},
//   list: [
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//   ]
//   city: {name: 'vancouver'},
//   list: [
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//     {main:{temp:260, humidity: 40, pressure:40}}
//   ]
// ]
