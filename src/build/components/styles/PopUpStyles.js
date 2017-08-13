/*  
    ----------------------------------------------
    Reminder Pop Up Component Styles
    ---------------------------------------------- 
*/
const STYLES = {
    CONTAINER: { 
        position: 'absolute',
        top: 16, 
        right: '5%',
        width: '10%', 
        minWidth: 180, 
        backgroundColor: '#d60617',
        padding: '30px 30px 70px 30px',
        borderRadius: 4,
        boxShadow: '2px 2px 0 rgba(0,0,0,0.19)',
        display: 'none',
        fontSize: '16px'
    },
    CLOSE_BUTTON: { 
        position: 'absolute', 
        right: 20,
        fontSize: 16,
        paddingBottom: 4, 
        backgroundColor: 'transparent',
        border: 0,
        color: '#fff',
        cursor: 'pointer'
    }
}

export default STYLES;