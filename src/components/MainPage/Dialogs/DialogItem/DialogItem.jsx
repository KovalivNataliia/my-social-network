import classNames from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={classNames.dialogs_item}>
            <img className={classNames.photo} src="https://img.icons8.com/color/2x/cat-profile.png" alt="" />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}



export default DialogItem