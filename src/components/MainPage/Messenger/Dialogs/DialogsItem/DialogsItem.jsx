import classNames from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <li className={classNames.dialogs_item}>
            <img className={classNames.photo} src={props.photo} alt="" />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}



export default DialogsItem