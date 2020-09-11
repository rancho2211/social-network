import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let newdialogsElements = React.createRef();

    let addmessages = () => {
        let text = newdialogsElements.current.value;
        alert(text);
    }

    let dialogElements = props.state.dialogs.map(dialog =>
        < DialogItem name={dialog.name} id={dialog.id}/>);

    let dialogMessages = props.state.messages.map(messagesData =>
        <Message message={messagesData.message}/>);
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogElements}
        </div>

        <div className={classes.messages}>
            {dialogMessages}
            <div>
                <textarea ref={newdialogsElements}> </textarea>
                <button onClick={addmessages}> add </button>

            </div>
        </div>
    </div>
}

export default Dialogs;