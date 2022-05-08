import React from 'react';
import { FaTimes } from 'react-icons/fa'
import Card from '../../SharedComponent/Card';

const CommentItem = ({item , handleDelete}) => {
    
    return(
        <div className='container'>
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display' > {item.text}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='red' />
            </button>
            </Card>
        </div>
    );

}

export default CommentItem;