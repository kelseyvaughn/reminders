import React from 'react';
import STYLES from './styles/AddReminderFormStyles.js';

/*  
    ----------------------------------------------
    AddReminderForm Component 
    ---------------------------------------------- 
*/
class AddReminderForm extends React.Component {

//--------------------------------- constructor
    constructor(props, context){
        super(props, context);
        this.setInitialState();
    }

    //--------------------------------- setInitialState
    setInitialState(){
        this.state = {  
            text: "",
            hour: "",
            min: "",
            meridiem: "",
            invalid: [],
            errorMsg: ""
        };
    }

    //--------------------------------- render
    render(){
        return (
            <form onSubmit={ (event) => this.onSubmit(event)} style={STYLES.CONTAINER}>
                <h1>Today</h1>
                <p style={STYLES.ERROR_MSG}>{this.state.errorMsg}</p>
                <input 
                    onChange={(event) => {this.setState({text: event.target.value})}}
                    onFocus={(event) => {this.setState({errorMsg: ""})}}
                    style={this.getInputStyleState("text")}
                    name="reminderText" type="text" 
                    placeholder="New Reminder" 
                />
                <input 
                    type="number"
                    onChange={(event) => this.onHourChange(event)}
                    onFocus={(event) => {event.target.select(); this.setState({errorMsg: ""});}}
                    style={this.getInputStyleState("hour")} 
                    name="hour" type="text" 
                    value={this.state.hour} 
                    maxLength="2"
                />
                <input 
                    type="number"
                    onChange={(event) => this.onMinChange(event)}
                    onFocus={(event) => {event.target.select(); this.setState({errorMsg: ""});}}
                    style={this.getInputStyleState("min")}  
                    name="min" type="text" 
                    value={this.state.min} 
                    maxLength="2"
                />
                <input 
                    type="text"
                    onChange={(event) => this.onMeridiemChange(event)}
                    onFocus={(event) => {event.target.select(); this.setState({errorMsg: ""});}}
                    style={this.getInputStyleState("meridiem")} 
                    name="meridiem" type="text" 
                    placeholder="AM" 
                    value={this.state.meridiem} 
                    maxLength="2"
                />
                <button 
                    type="submit"
                    style={STYLES.BUTTON}>
                    Add
                </button>
            </form>
        );
    }

    //--------------------------------- componentDidMount
    componentDidMount() {
        this.setNextTime();
    }

    //--------------------------------- onAddReminderClick
    onSubmit(event){
        let added = false;
        event.preventDefault();
        if(this.isValid()) added = this.addReminder();
        if(added){
            this.setNextTime();
            this.setState({text: ""});
            event.target.reset();
        }
    }

    //--------------------------------- onMeridiemChange
    onMeridiemChange(event){
        //only allow varients of AM or PM
        let val =  event.target.value.toUpperCase();
        val = (val == "AM" | val == "PM" | val == "A" | val == "P" | val == "M") ? val : "";

        this.setState( {meridiem: val} );
    }

    //--------------------------------- onMinChange
    onMinChange(event){
        //only allow numbers between 0 & 59
        let val =  event.target.value.toUpperCase();
        val = (!parseInt(val).isNan && parseInt(val) <= 59) ? val : "";

        this.setState( {min: val} );
    }

    //--------------------------------- onHourChange
    onHourChange(event){
        //only allow numbers between 1 & 12
        let val =  event.target.value.toUpperCase();
        val = (!parseInt(val).isNan && parseInt(val) >= 1 && parseInt(val) <= 12) ? val : "";

        this.setState( {hour: val} );
    }

    //--------------------------------- onInputChange
    getInputStyleState(input_name){
        if(input_name == "text") {
            return this.state.invalid.indexOf("text")>-1 ? 
                Object.assign(Object.assign({}, STYLES.INPUT_REMINDER), STYLES.INVALID_INPUT) : 
                STYLES.INPUT_REMINDER
        }

        return this.state.invalid.indexOf(input_name)>-1 ? 
            Object.assign(Object.assign({}, STYLES.INPUT), STYLES.INVALID_INPUT) : 
            STYLES.INPUT;
    }

    //--------------------------------- isValid
    isValid(){
        let invalid = [];

        if(!this.state.text) invalid.push("text");
        if(!this.state.hour) invalid.push("hour");
        if(!this.state.min) invalid.push("min");
        if(!this.state.meridiem) invalid.push("meridiem");

        this.setState({invalid: invalid});

        if(invalid.length) return false;
        return true;
    }

    //--------------------------------- addReminder
    addReminder(){
        //convert hour, min & meridiem to JS Date
        let date = new Date(); 
        let hour = parseInt(this.state.hour);
        if(hour === 12 && this.state.meridiem == 'AM') hour = 0;
        hour = (this.state.meridiem == 'PM' && hour !== 12) ? hour+12 : hour;
        date.setHours(hour);
        date.setMinutes(parseInt(this.state.min));
        date.setSeconds(0);
        date.setMilliseconds(0);

        let cur_date = new Date();
        if(cur_date > date){
           this.setState({errorMsg: "Please enter a time in the future!"}); 
           return false;
        } 

        this.props.addReminder(this.state.text, date);
        return true;
    }

    //--------------------------------- setNextTime
    setNextTime(){
        //set the defaut time to the next hour
        let date = new Date();
        let hour = date.getHours();
        hour++;
        let meridiem = hour > 11 ? 'PM' : 'AM';
        hour = hour > 12 ? hour-12 : hour;
        let min = "00";

        this.setState({
            meridiem: meridiem,
            hour: hour,
            min: min
         });
    }
}

export default AddReminderForm;