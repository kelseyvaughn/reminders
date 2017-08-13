import React from 'react';
import STYLES from './styles/PopUpStyles.js';

/*  
    ----------------------------------------------
    PopUp Component 
    ---------------------------------------------- 
*/
class PopUp extends React.Component {

    //--------------------------------- render
    render(){
        let display = this.props.show ? 'block' : 'none';
        //set display style according to prop
        let container_style = Object.assign({}, STYLES.CONTAINER);
        container_style.display = display;

        return (
            <div style={container_style}>
                <button onClick={() => this.onCloseBtnClick()} style={STYLES.CLOSE_BUTTON}>x</button>
                <p style={{paddingTop: 30, textAlign: 'center', color: '#FFF'}}>
                    {this.props.text}
                </p>
            </div>
        );
    }

    //--------------------------------- onCloseBtnClick
    onCloseBtnClick(){
        this.props.onClose();
    }

}

export default PopUp;