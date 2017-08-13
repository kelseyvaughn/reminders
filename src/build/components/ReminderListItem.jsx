import React from 'react';
import STYLES from './styles/ReminderListItemStyles.js';

/*  
    ----------------------------------------------
    ReminderListItem Component 
    ---------------------------------------------- 
*/
class ReminderListItem extends React.Component {

    //--------------------------------- render
    render(){
        let minutes = this.props.date.getMinutes();
        let hours = this.props.date.getHours();

        return (
            <li style={STYLES.LIST_ITEM}>
                <div style={STYLES.TEXT}>
                    <div style={STYLES.REMINDER_TEXT}>{this.props.text}</div>
                    <div style={STYLES.TIME_TEXT}>
                        {this.props.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                </div>
                <button onClick={() => this.onDeleteClick()} title="delete" style={STYLES.DELETE_BUTTON}>x</button>
            </li>
        );
    }

    //--------------------------------- onDeleteClick
    onDeleteClick(){
        this.props.onDelete(parseInt(this.props.index));
    }
}

export default ReminderListItem;