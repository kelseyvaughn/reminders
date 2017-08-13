import React from 'react';
import AddReminderForm from './AddReminderForm.jsx';
import ReminderList from './ReminderList.jsx';
import PopUp from './PopUp.jsx';
import STYLES from './styles/AppStyles.js';

/*  
    ----------------------------------------------
    App Component 
    ---------------------------------------------- 
*/
class App extends React.Component {
    //--------------------------------- constructor
    constructor(props, context){
        super(props, context);
        this.setInitialState();
    }

    //--------------------------------- setInitialState
    setInitialState(){
        this.state = {  
            showReminderPopUp: false,
            curReminder: null,
            reminders:[]
        };
    }

    //--------------------------------- render    
    render(){
        return (
            <div style={STYLES.CONTAINER}>
                <AddReminderForm 
                    addReminder={(text, date) => this.addReminder(text, date)}
                />
                <ReminderList 
                    reminders={this.state.reminders}
                    deleteReminder={(key)=> this.deleteReminder(key)}
                />
                <PopUp 
                    show={this.state.showReminderPopUp}
                    text={this.state.curReminder ? this.state.curReminder.text : ""}
                    onClose={() => this.onReminderPopUpCloseClick()} 
                />
            </div>
        );
    }

    //--------------------------------- componentDidMount    
    componentDidMount(){
        //check reminders every second
        setInterval(() => this.checkReminders(), 1000);
    }

    //--------------------------------- onReminderPopUpCloseClick    
    onReminderPopUpCloseClick(){
        //if curReminder not null --> remove topmost reminder 
        //& set the state of curReminder to null 
        if(this.state.curReminder) 
            this.setState({reminders: this.state.reminders.slice(1), curReminder: null}); 
        //set the popUp show value to false
        this.state.showReminderPopUp = false;
    }

    //--------------------------------- addReminder
    addReminder(text, date){
        //make sure the datetime 
        //is greater than current date
        let cur_date = new Date();
        if(cur_date > date) return;

        let reminders = [...this.state.reminders, {text: text, date: date}];
        //sort the reminders by date in ascending order
        reminders = reminders.sort((a, b) => (a.date - b.date));

        this.setState({ reminders: reminders });
    }

    //--------------------------------- deleteReminder
    deleteReminder(index){
        let state = { reminders: this.state.reminders.filter((reminder, i) => (index !== i)) };
        //if the reminder to delete is the curReminder --> hide the PopUp
        if(index === 0) {
            state.showReminderPopUp = false;
            state.curReminder = 0;
        }

        this.setState(state);
    }

    //--------------------------------- checkReminders
    checkReminders(){
        //setInterval to check reminders
        //if topmost reminder's date is now or earlier --> show the pop-up of the reminder
        if(this.state.reminders.length && this.state.reminders[0].date <= new Date()) 
            this.setState({curReminder: this.state.reminders[0], showReminderPopUp: true});
    }
}

export default App;