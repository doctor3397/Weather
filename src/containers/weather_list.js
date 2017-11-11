import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    // console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temps} width={180} height={120}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
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
