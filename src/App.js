import { useState } from "react";
import CommentForm from "./componnents/CommentForm/CommentForm";
import CommentList from "./componnents/CommentsList/CommentsList";
import CommentState from "./componnents/CommentState/CommentState";
import CommentsDta from "./componnents/Data/CommentsData";
import Header from "./componnents/Header/Header";
const title = "Add your comment"
function App(){
const [items , setItems] = useState(CommentsDta);

const deleteItem = (id)=>{
    console.log(id);
    setItems(items.filter((item) => item.id !== id));

}
    return (
        <>
            <Header text={title} />
            <CommentForm/>
            <CommentState items={items} />
            <CommentList items={items} handleDelete={deleteItem} />
        </>
    )
}

export default App;