/*  
    ----------------------------------------------
    Reminder List Item Component Styles
    ---------------------------------------------- 
*/
const STYLES = {
    LIST_ITEM: { 
        width:'100%', 
        listStyle:'none', 
        borderBottom: 'solid 1px #ddd', 
        padding: 20,
        boxSizing: 'border-box',
        float: 'left'
    },
    TEXT: { float: 'left', width: '70%' },
    REMINDER_TEXT: { fontSize: '1.4em', paddingBottom: 24 },
    TIME_TEXT: { color:'#888' },
    DELETE_BUTTON: {
        float: 'right',
        border: 0,
        backgroundColor: 'transparent',
        fontSize: '1.6em',
        fontWeight: 'bold',
        margin: '-0.3em 0 0 0',
        cursor: 'pointer',
        paddingRight: 0
    }
}

export default STYLES;