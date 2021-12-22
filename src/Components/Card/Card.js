import cls from './Card.module.scss';
import {AiOutlineDelete } from 'react-icons/ai'
import {FaPenSquare} from 'react-icons/fa'

const Card = ({en, ru,isRemembered , onClick , onDelete, onEdit}) => {
    return (
        
        <div className={cls.container}>
            <div onClick={onClick} className={`${cls.root} ${isRemembered ? cls.isRemembered : null}`}>
                <p className={cls.front}>{en}</p>
                <p className={cls.back}>{ru}</p>
            </div>
            <div className={cls.icons}>
                <AiOutlineDelete onClick={onDelete} className={cls.deleteIcon} />
                <FaPenSquare onClick={onEdit} className={cls.editIcon} />
            </div>
        </div>
    )
}

export default Card;