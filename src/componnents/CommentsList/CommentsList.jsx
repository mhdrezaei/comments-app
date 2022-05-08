import React from 'react';
import CommentItem from '../CommentItem/CommentItem'

function CommentsList({items , handleDelete}) {

    if(!items || items.length === 0){
        return <p>No Comments Yet</p>
    }
  return (
     
      <div className='feedback-list'>
    {items.map((item) =>{
         return <CommentItem key={item.id} item={item} handleDelete={handleDelete} /> 
         })}
    </div>

  )
}

export default CommentsList;


// return (
//   <>
// {items.map((item) =>{
//      return <CommentItem key={item.id} item={item} handleDelete={handleDelete} /> 
// })}
// </>
// )