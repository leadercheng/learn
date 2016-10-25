import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet
} from "react-native";
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: [{ key: 0, city: "\u798f\u5dde", night: !0, bg: require("./img/w2.png"), abs: "\u5927\u90e8\u6674\u6717", degree: 15, today: { week: "\u661f\u671f\u516d", day: "\u4eca\u5929", high: 16, low: 14 }, hours: [{ key: 101, time: "\u73b0\u5728", icon: "ios-moon", degree: "15\xb0", color: "rgba(255,255,255,1)" }, { key: 102, time: "3\u65f6", icon: "ios-cloudy-night", degree: "15\xb0", color: "rgba(255,255,255,0.8)" }, { key: 103, time: "4\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 104, time: "5\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 105, time: "6\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 106, time: "06:21", icon: "ios-sunny-outline", degree: "\u65e5\u51fa", color: "#fedf32" }, { key: 107, time: "7\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 108, time: "8\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 109, time: "9\u65f6", icon: "ios-sunny", degree: "19\xb0", color: "#fedf32" }, { key: 110, time: "10\u65f6", icon: "ios-sunny", degree: "122\xb0", color: "#fedf32" }, { key: 111, time: "11\u65f6", icon: "ios-sunny", degree: "23\xb0", color: "#fedf32" }, { key: 112, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 113, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 114, time: "14\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 115, time: "15\u65f6", icon: "ios-partly-sunny", degree: "22\xb0", color: "rgba(255,255,255,0.9)" }, { key: 116, time: "16\u65f6", icon: "ios-partly-sunny", degree: "21\xb0", color: "rgba(255,255,255,0.9)" }, { key: 117, time: "17\u65f6", icon: "ios-partly-sunny", degree: "19\xb0", color: "rgba(255,255,255,0.9)" }, { key: 118, time: "18\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 119, time: "18:06", icon: "ios-partly-sunny-outline", degree: "\u65e5\u843d", color: "rgba(255,255,255,0.9)" }, { key: 120, time: "19\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 121, time: "20\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 122, time: "21\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 123, time: "22\u65f6", icon: "ios-cloudy-night", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 124, time: "23\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 125, time: "0\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 126, time: "1\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 127, time: "2\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }], days: [{ key: 21, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 21, low: 16 }, { key: 22, day: "\u661f\u671f\u4e8c", icon: "ios-rainy", high: 22, low: 14 }, { key: 23, day: "\u661f\u671f\u4e09", icon: "ios-rainy", high: 21, low: 11 }, { key: 24, day: "\u661f\u671f\u56db", icon: "ios-rainy", high: 12, low: 8 }, { key: 25, day: "\u661f\u671f\u4e94", icon: "ios-rainy", high: 9, low: 7 }, { key: 26, day: "\u661f\u671f\u516d", icon: "ios-partly-sunny", high: 13, low: 9 }, { key: 27, day: "\u661f\u671f\u65e5", icon: "ios-rainy", high: 17, low: 13 }, { key: 28, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 18, low: 14 }, { key: 29, day: "\u661f\u671f\u4e8c", icon: "ios-partly-sunny", high: 22, low: 17 }], info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002", rise: "06:21", down: "18:06", prop: "10%", humi: "94%", dir: "\u4e1c\u5317\u504f\u5317", speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6", feel: "15\xb0", rain: "0.0 \u5398\u7c73", pres: "1,016 \u767e\u5e15", sight: "5.0 \u516c\u91cc", uv: "0" }, { key: 1, city: "\u5361\u5c14\u52a0\u91cc", night: !1, bg: require("./img/w3.png"), abs: "\u5927\u90e8\u6674\u6717", degree: 15, today: { week: "\u661f\u671f\u516d", day: "\u4eca\u5929", high: 16, low: 14 }, hours: [{ key: 101, time: "\u73b0\u5728", icon: "ios-moon", degree: "15\xb0", color: "rgba(255,255,255,1)" }, { key: 102, time: "3\u65f6", icon: "ios-cloudy-night", degree: "15\xb0", color: "rgba(255,255,255,0.8)" }, { key: 103, time: "4\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 104, time: "5\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 105, time: "6\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 106, time: "06:21", icon: "ios-sunny-outline", degree: "\u65e5\u51fa", color: "#fedf32" }, { key: 107, time: "7\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 108, time: "8\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 109, time: "9\u65f6", icon: "ios-sunny", degree: "19\xb0", color: "#fedf32" }, { key: 110, time: "10\u65f6", icon: "ios-sunny", degree: "122\xb0", color: "#fedf32" }, { key: 111, time: "11\u65f6", icon: "ios-sunny", degree: "23\xb0", color: "#fedf32" }, { key: 112, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 113, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 114, time: "14\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 115, time: "15\u65f6", icon: "ios-partly-sunny", degree: "22\xb0", color: "rgba(255,255,255,0.9)" }, { key: 116, time: "16\u65f6", icon: "ios-partly-sunny", degree: "21\xb0", color: "rgba(255,255,255,0.9)" }, { key: 117, time: "17\u65f6", icon: "ios-partly-sunny", degree: "19\xb0", color: "rgba(255,255,255,0.9)" }, { key: 118, time: "18\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 119, time: "18:06", icon: "ios-partly-sunny-outline", degree: "\u65e5\u843d", color: "rgba(255,255,255,0.9)" }, { key: 120, time: "19\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 121, time: "20\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 122, time: "21\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 123, time: "22\u65f6", icon: "ios-cloudy-night", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 124, time: "23\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 125, time: "0\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 126, time: "1\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 127, time: "2\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }], days: [{ key: 21, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 21, low: 16 }, { key: 22, day: "\u661f\u671f\u4e8c", icon: "ios-rainy", high: 22, low: 14 }, { key: 23, day: "\u661f\u671f\u4e09", icon: "ios-rainy", high: 21, low: 11 }, { key: 24, day: "\u661f\u671f\u56db", icon: "ios-rainy", high: 12, low: 8 }, { key: 25, day: "\u661f\u671f\u4e94", icon: "ios-rainy", high: 9, low: 7 }, { key: 26, day: "\u661f\u671f\u516d", icon: "ios-partly-sunny", high: 13, low: 9 }, { key: 27, day: "\u661f\u671f\u65e5", icon: "ios-rainy", high: 17, low: 13 }, { key: 28, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 18, low: 14 }, { key: 29, day: "\u661f\u671f\u4e8c", icon: "ios-partly-sunny", high: 22, low: 17 }], info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002", rise: "06:21", down: "18:06", prop: "10%", humi: "94%", dir: "\u4e1c\u5317\u504f\u5317", speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6", feel: "15\xb0", rain: "0.0 \u5398\u7c73", pres: "1,016 \u767e\u5e15", sight: "5.0 \u516c\u91cc", uv: "0" }],

    }
  }

  render() {
    const citySlides = this.state.weatherData.map((cityData, index) => {
      return (
        <View key={cityData.key} style={styles.container}>
          <Image source={cityData.bg}></Image>
          <CityWeather data={cityData} />
        </View>
      );
    });
    return (
      <Swiper style={{ flex: 1 }}>
        {citySlides}
      </Swiper>
    );
  }
}

class CityWeather extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }
  render() {
    return (
      <ScrollView style={styles.cityWeather}>
        <CitySection data={this.props.data} />
        <TodaySection data={this.props.data} />
        <WeekSection data={this.props.data} />
      </ScrollView>
    );
  }
}

class CitySection extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }
  render() {
    return (
      <View style={styles.citySection}>
        <Text style={styles.city}>{this.props.data.city}</Text>
        <Text style={styles.abs}>{this.props.data.abs}</Text>
        <Text style={styles.degree}>{this.props.data.degree}°</Text>
      </View>
    );
  }
}

class TodaySection extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.today}>
        <TodayInfo data={this.props.data} />
        <HourSection data={this.props.data} />
      </View>
    );
  }
}

class TodayInfo extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.todayInfo}>
        <View style={styles.todayInfoHead}>
          <Text style={styles.todayInfoText}>
            {this.props.data.today.week}
          </Text>
          <Text style={styles.todayInfoText}>
            {this.props.data.today.day}
          </Text>
        </View>
        <View style={styles.todayInfoTail}>
          <Text style={styles.todayInfoDayHigh}>
            {this.props.data.today.high}
          </Text>
          <Text style={this.props.data.night ? styles.todayInfoDayLow : styles.todayInfoNightLow}>
            {this.props.data.today.low}
          </Text>
        </View>
      </View>
    );
  }
}

class HourSection extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  render() {
    const hourInfo = this.props.data.hours.map((data, index) => {
      return (
        <View key={data.key} style={styles.hourInfo}>
          <Text style={styles.text}>{data.time}</Text>
          <Icon name={data.icon} size={25} style={[{ color: data.color }]} />
          <Text style={styles.text}>{data.degree}</Text>
        </View>
      );
    });

    return (
      <ScrollView horizontal={true}>
        <View style={styles.hourSection}>
          {hourInfo}
        </View>
      </ScrollView>
    );
  }
}

class WeekSection extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  render() {
    const weekDayInfo = this.props.data.days.map((dayData, dayIndex) => {
      return (
        <View key={dayData.key} style={styles.weekDayInfo}>
          <View style={styles.weekDayName}>
            <Text style={styles.text}>{dayData.day}</Text>
          </View>
          <View style={styles.weekDayIcon}>
            <Icon name={dayData.icon} style={{ color: "#fff" }} size={25}></Icon>
          </View>
          <View style={styles.weekDayDegree}>
            <Text style={styles.weekDaydegreeHigh}>{dayData.high}</Text>
            <Text style={dayData.night ? styles.weekDayDegreeNight : styles.weekDayDegreeLow}>{dayData.low}</Text>
          </View>
        </View>
      );
    });
    return (
      <View>
        {weekDayInfo}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  cityWeather: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    top: 10,
    width: Dimensions.get('window').width,
  },
  citySection: {
    //borderWidth: 1,
    //borderColor: "white",
    //paddingTop:70,
    //paddingBottom:60,
    backgroundColor: "transparent",
    alignItems: "center",
    //justifyContent: "space-around",
  },
  city: {
    fontSize: 55,
    color: "#fff",
    // paddingBottom: 5,
    //backgroundColor:"red"
  },
  abs: {
    fontSize: 25,
    color: "#fff",
    //backgroundColor:"transparent"
  },
  degree: {
    fontSize: 85,
    color: "#fff",
  },
  today: {
    marginTop: 20,
    marginBottom: 20,
  },
  todayInfo: {
    flexDirection: "row",
    padding: 10,
  },
  todayInfoHead: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  todayInfoTail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  todayInfoText: {
    fontSize: 18,
    color: "#fff",
    width: 60,
  },
  todayInfoDayHigh: {
    fontSize: 18,
    color: "#fff",
    width: 30,
  },
  todayInfoDayLow: {
    fontSize: 18,
    color: "#eee",
    width: 30,
  },
  todayInfoNightLow: {
    fontSize: 18,
    color: "#ccc",
    width: 30,
  },
  hourSection: {
    padding: 20,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  hourInfo: {
    width: 60,
    alignItems: "center"
  },
  weekDayInfo: {
    flexDirection: "row",
    height: 38
  },
  weekDayName: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  weekDayIcon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  weekDayDegree: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    paddingRight: 25,
  },
  weekDaydegreeHigh: {
    color: "#fff",
    width: 35,
    fontSize: 18,
    textAlign: "right"
  },
  weekDayDegreeLow:{
    color:"#eee",
    width:35,
    fontSize:18,
    textAlign:"right"
  },
  weekDayDegreeNight:{
    color:"#aaa",
    width:35,
    fontSize:18,
    textAlign:"right"
  },


});

