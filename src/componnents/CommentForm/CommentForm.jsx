import React from 'react'
import Card from '../../SharedComponent/Card'
import { useState } from 'react'
import Button from '../../SharedComponent/Button';
import CommentRating from '../CommentRating/CommentRating';
function CommentForm() {
    const [text , setText] = useState('');
    const [errMsg , setErrMsg] = useState('');
    const [haveErr , setHaveErr] = useState(false);
    

    const handleText = (e) =>{
        setText(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text ==='' || text ==='undefined'){
            setErrMsg ("comment field is empty") ;
            setHaveErr(true);
            return ;
        }
        if (text.trim().length < 5 ){
            setErrMsg ("Your comment is too short") ;
            setHaveErr(true);
            return ;

        }
        setErrMsg(false)
        console.log('sent!')
    }

    
  return (
      <div className='container'>
    <Card>
        <form>
        <h2>Would you like to write Comments?</h2>
        <CommentRating select={(rating) => { console.log(rating) }} />
        <div className='input-group'>
            <input type='type' onChange={handleText} placeholder='write a comment' value={text} ></input>
            <Button type='submit'  func={handleSubmit} >Send</Button>
            {/* <button type='submit' onClick={handleSubmit} >send</button> */}
        </div>
        </form>
        {haveErr && <p>{errMsg}</p> }
    </Card>
    </div>
  )
}

export default CommentForm