import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import AboutIcon from "./AboutIcon/AboutIcon";
import CommentForm from "./componnents/CommentForm/CommentForm";
import CommentList from "./componnents/CommentsList/CommentsList";
import CommentState from "./componnents/CommentState/CommentState";
import CommentsDta from "./componnents/Data/CommentsData";
import Header from "./componnents/Header/Header";
import About from './Pages/About'
const title = "Add your comment"
function App(){
const [items , setItems] = useState(CommentsDta);

const deleteItem = (id)=>{
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
}

const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setItems([newFeedback , ...items]);
}
    return (
        <Router>
            <Header text={title} />

        <Routes>

        <Route exact path="/" element={
            <>
            <CommentForm handleAddFeedBack={addFeedBack} />
            <CommentState items={items} />
            <CommentList items={items} handleDelete={deleteItem} />
        </>
        }  />
        <Route path="/about" element={<About />} />


        </Routes>
        <AboutIcon />

        </Router>
        
    )
}

export default App;