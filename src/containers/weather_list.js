import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
class WeatherList extends Component {

  renderWeather(cityData, id) {
    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(weather => weather.main.temp);
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Sparklines height={120} width={180} data={cityTemp}>
            <SparklinesLine color="red" />
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
    )
  }
}

function mapStateToProps({ weather }) {
  //const weather = state.weather ^
  //return { weather: state.weather };
  return { weather }; // same as ^
}

export default connect(mapStateToProps)(WeatherList);