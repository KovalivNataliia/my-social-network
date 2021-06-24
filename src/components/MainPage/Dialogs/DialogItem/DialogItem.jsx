import classNames from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={classNames.dialogs_item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}



export default DialogItem