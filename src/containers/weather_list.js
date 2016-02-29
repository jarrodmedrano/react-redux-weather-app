import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';

class WeatherList extends Component {

  renderWeather(cityData, id) {
    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(weather => weather.main.temp);
    const cityPressure = cityData.list.map(weather => weather.main.pressure);
    const cityHumidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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