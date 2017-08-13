/*  
    ----------------------------------------------
    AddReminderForm Component Styles
    ---------------------------------------------- 
*/
const STYLES = {
    CONTAINER: {
        width: '100%', 
        margin: '10 0'
    },
    INPUT: {
        width: '10%',
        height: 40,
        fontSize: '1em',
        textAlign: 'center',
        border: 'solid 1px #ddd',
        borderRightWidth: 0,
        borderRadius: 0,
        backgroundColor: '#fff',
        WebkitAppearance: 'none',
        boxSizing: 'border-box'
    },
    INPUT_REMINDER: {
        width:'56%', 
        textAlign: 'left', 
        paddingLeft: 20
    },
    INVALID_INPUT: { backgroundColor: '#edb8b8' },
    BUTTON: {
        width: '14%', 
        height: 40, 
        color: '#fff', 
        backgroundColor: '#d60617',
        border: 0,
        fontSize: '1em',
        borderRadius: 0,
        cursor: 'pointer',
        verticalAlign: 'top',
        boxSizing: 'border-box'
    },
    ERROR_MSG: {
        width: '100%',
        textAlign: 'right',
        color: '#d60617'
    }
};

//extend INPUT styles to INPUT_REMINDER styles
STYLES.INPUT_REMINDER = Object.assign( Object.assign({}, STYLES.INPUT), STYLES.INPUT_REMINDER );

export default STYLES;