import { PropTypes } from "prop-types";

function Header (props) {
    const myStyle ={

        paddingTop : '25px'
       }
    return(
        <header>
            <div className="container">
                <h1  style={myStyle} >{props.text}</h1>
            </div>
        </header>
    );
}

Header.defaultProps ={
    text : "Add your comments"
}

Header.propTypes = {
    text : PropTypes.string
}

export default Header;