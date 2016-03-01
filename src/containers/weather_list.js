import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component {

  renderWeather(cityData, id) {
    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(weather => weather.main.temp);
    const cityPressure = cityData.list.map(weather => weather.main.pressure);
    const cityHumidity = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={cityTemp} color="orange" />
        </td>
        <td><Chart data={cityPressure} color="green" />
        </td>
        <td><Chart data={cityHumidity} color="blue" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  //const weather = state.weather ^
  //return { weather: state.weather };
  return { weather }; // same as ^
}

export default connect(mapStateToProps)(WeatherList);