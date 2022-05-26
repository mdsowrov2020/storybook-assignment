import React from "react";
import PropTypes from 'prop-types'
import './Button.css'


const Button =({label, backgroundColor = 'red',size = 'md',onClick})=> {
   let scale =1;
   if(size === 'sm') scale = 0.75
   if(size ==='lg') scale = 1.5

   const style = {
       backgroundColor,
       padding : `${scale*.5}em ${scale * 1}em`,
       border: 'none'
   }

   return (
       <button  style={style} onClick={onClick}>
           {label}
       </button>
   )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size:PropTypes.oneOf(['sm','md','lg']),
    onClick: PropTypes.func
}

export default Button