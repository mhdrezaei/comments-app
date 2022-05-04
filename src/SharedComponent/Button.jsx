import React from 'react';
import { PropTypes } from "prop-types";

function Button({children , type , version , func}) {
  return (
    <button type={type} onClick={func} className={`btn btn-${version}`} >
        {children}
    </button>
  )

  

}

Button.defaultProps = {
    version: "primary",
    type : 'submit'
}

Button.propTypes ={
    children : PropTypes.node.isRequired,
    type : PropTypes.string,
    version : PropTypes.string,
    func : PropTypes.string

}


export default Button