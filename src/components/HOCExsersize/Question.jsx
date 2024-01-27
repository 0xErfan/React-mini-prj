import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import WithToggle from '../HOCs/withToggle';

function Question({title, info, onToggleHandler, showInfo}) {
    return (
        <article onClick={onToggleHandler} className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn'>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
};

export default WithToggle(Question)