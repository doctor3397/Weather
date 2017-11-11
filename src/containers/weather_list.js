import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) { // { weather }
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
