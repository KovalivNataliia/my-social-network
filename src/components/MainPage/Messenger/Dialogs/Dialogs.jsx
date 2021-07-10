import classNames from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'


const Dialogs = (props) => {
    
    let dialogElement = props.dialogsData.map(dialog => {
        return <DialogsItem name={dialog.name} id={dialog.id} photo={dialog.photo}/>
    })


    return (
        <div className={classNames.dialogs}>
            <ul>
                {dialogElement}
            </ul>
        </div>
    );
}

export default Dialogs