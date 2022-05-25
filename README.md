# Assignment on Storybook

## What is storybook
Storybook is a javaScript tool and it is a UI development environment to create component independently and showcase of components interactively in an isolated development environment. Storybook allows you to see and  interect with your components. When a component is created then you can see its behaviour,actions and what it actually do and why is it created for. It gives you a clear documentation about component. In word, storybook helps us to visually test our application before construction.

It is essentially a component catalogue that makes it easier for designers and developers to work together to meet the needs of an ever changing application landscape. Here designers no need to take temporary page for test their component. They can easily test their creation from storybook's provided server.

## Features
- Showcase your components
- Isolation
- Action logger

 
## Create a button component
```js
import React from "react";
import PropTypes from 'prop-types'
function Button({label, backgroundColor = 'red',size = 'md',onClick}) {
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
```

## Create a button story

```js
export default{
    title : 'Button',
    component: Button
}


const Template = args => <Button {...args}/>
export const Red =  Template.bind({})

Red.args ={
    backgroundColor: 'red',
    label : 'Click Me',
    size : 'md'
}

```

