import React from 'react';
import ReminderListItem from './ReminderListItem.jsx';
import STYLES from './styles/ReminderListStyles.js';

/*  
    ----------------------------------------------
    ReminderList Component
    ---------------------------------------------- 
*/
class ReminderList extends React.Component {

    //--------------------------------- render
    render(){
        let listItems = this.props.reminders.map( (reminder, key) =>
            <ReminderListItem 
                key={key}
                index={key}
                text={reminder.text}
                date={reminder.date}
                onDelete={(key) => this.deleteReminder(key)}
            />
        );

        return (
            <ul style={STYLES.LIST}>
                {listItems}
            </ul>
        );
    }

    //--------------------------------- deleteReminder
    deleteReminder(index){
        //set isComplete to whatever it is not
        this.props.deleteReminder(index);
    }
}

export default ReminderList;