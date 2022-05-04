import React from 'react'

function CommentState({items}) {
    let avrage = items.reduce((acc , cur) => {
        return acc + cur.rating
    }, 0) / items.length;

    avrage = avrage.toFixed(1);

  return (
      <div className='container'> 
    <div className='feedback-stats' >
    <h4>{items.length} Comments</h4> 
    <h4>Avrage Rating : {isNaN(avrage) ? 0 : avrage}</h4> 
    </div>
    </div>
  )
}

export default CommentState