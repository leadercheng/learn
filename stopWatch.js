import React, {Component} from "react";
import {
  ListView,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from "react-native";

export default class extends Component {
	constructor() {
		super();
	}

	init = () => {
		this.setState({
			startTiming: 0,
			totalTime: 0,
			sectionTime: 0,
			lastTotalTime: 0,
			counter: 0,
			records:[{}],
		});
	}

	stringifyTime = (myTime) => {
		let minute = Math.floor(myTime/(60*1000));
		let second = Math.floor((myTime-6000*minute)/1000);
		let milSecond = Math.floor((myTime%1000)/10);
		let result = (minute<10? "0"+minute : minute)+":"+(second<10? "0"+second : second)+"."+(milSecond<10? "0"+milSecond : milSecond);
		return result;
	}

	start = () =>{
		let tickTimes = () =>{
			let currentTiming = new Date().getTime();
			let sectionTime = currentTiming - this.state.startTiming;
			let totalTime = this.state.lastTotalTime + currentTiming - this.state.startTiming;
			this.setState({
				totalTime: totalTime,
				sectionTime: sectionTime,
			});
		};

		this.setState({startTiming: new Date().getTime()});
		let interval = setInterval(tickTimes, 100);
		this.setState({interval: interval});
	}

	stop = () =>{
		clearInterval(this.state.interval);
		this.setState({lastTotalTime: this.state.totalTime});
	}

	record = () =>{
		let {counter, records} = this.state;
		counter++;
		records.unshift({title: "Record "+counter, time: this.stringifyTime(this.state.sectionTime)});
		this.setState({
			counter: counter,
			startTiming: new Date().getTime()
		});
	}

	reset = ()=>{
		this.init();
	}

	componentWillMount(){
		this.init();
	}

	render(){
		return(
      <View style={styles.container}>
        <WatchFace  totalTime={this.stringifyTime(this.state.totalTime)} sectionTime={this.stringifyTime(this.state.sectionTime)}></WatchFace>
        <WatchControl onStart={this.start} onStop={this.stop} onRecord={this.record} onReset={this.reset}></WatchControl>
        <WatchRecord records={this.state.records}></WatchRecord>
      </View>
    );
	}
}

class WatchFace extends Component {
	static propTypes = {
		totalTime: React.PropTypes.string.isRequired,
		sectionTime: React.PropTypes.string.isRequired,
	};

	constructor() {
		super();
	}

	render(){
		return(
      <View style={styles.faceContainer}>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    );
	}
}

class WatchControl extends Component{
	constructor(){
		super();
		this.state = {
			started: false,
		};
	}

	static propTypes = {
		onStart: React.PropTypes.func.isRequired,
		onStop: React.PropTypes.func.isRequired,
		onRecord: React.PropTypes.func.isRequired,
		onReset: React.PropTypes.func.isRequired,
	}

	onStart = () => {
		this.setState({
			started: true,
		});
		this.props.onStart();
	}

	onStop = () =>{
		this.setState(
			{
				started: false,
			}
    );
		this.props.onStop();
	}

	onRecord = () =>{
		this.props.onRecord();
	}

	onReset = () =>{
		this.props.onReset();
	}

	render() {
		return (
      <View style={styles.controlContainer}>
          {
            this.state.started &&
            <TouchableHighlight style={styles.control} onPress={this.onRecord}>
              <Text style={styles.controlText}>Count</Text>
            </TouchableHighlight>
          }
          {
            !this.state.started &&
            <TouchableHighlight style={styles.control}  onPress={this.onReset}>
              <Text style={styles.controlText}>Reset</Text>
            </TouchableHighlight>
          }
          {
            !this.state.started &&
            <TouchableHighlight style={styles.control} onPress={this.onStart}>
              <Text style={styles.controlText}>Start</Text>
            </TouchableHighlight>
          }
          {
            this.state.started &&
            <TouchableHighlight style={styles.control} onPress={this.onStop}>
              <Text style={styles.controlText}>Stop</Text>
            </TouchableHighlight>
          }
      </View>
    );
	}
}

class WatchRecord extends Component{
	static propTypes = {
		records: React.PropTypes.array.isRequired,
	};

	render() {
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let recordDataSource = ds.cloneWithRows(this.props.records);
		return (
      <View  style={styles.recordContainer}>
        <ListView dataSource={recordDataSource} renderRow={(rowData) =>
          <View style={styles.recordItem}>
            <Text>{rowData.title}</Text>
            <Text>{rowData.time}</Text>
          </View>
        }
        />
      </View>
    );
	}
}

const styles = StyleSheet.create({

	container:{
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
	},
	faceContainer:{
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	sectionTime: {
		fontSize: 20,
	},
	totalTime: {
		fontSize: 40,
		color: "#222",
	},
	controlContainer:{
		flex: 1,
		//borderWidth: 1,
		flexDirection:"row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor:"silver",
	},
	control:{
		width: 70,
		height: 70,
		borderWidth: 1,
		borderRadius: 35,
		borderColor: "white",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"white",
	},
	controlText:{
		fontSize:16,
		backgroundColor:"transparent",
	},
	recordContainer:{
		flex: 4,
	},
	recordItem:{
		flexDirection:"row",
		justifyContent: "space-around",
	},
}

);
