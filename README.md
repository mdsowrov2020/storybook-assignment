# Assignment on Storybook

## What is storybook
Storybook is a javaScript tool and it is a UI development environment to create component independently and showcase of components interactively in an isolated development environment. Storybook allow us to see and  interect with our components. When a component is created then we can see its behaviour, actions and what it actually does and why is it created for. It gives us a clear documentation about component. In a word, storybook helps us to visually test our application components before the application has been built.

It is an essential component catalogue that makes team work easier for designers and developers and allow to work together to meet the needs of an ever changing application landscape. After storybook, it is no longer required to create a test project/file to develop and test UI components for designers. They can easily test their creation on storybook and documented their works properly.

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

