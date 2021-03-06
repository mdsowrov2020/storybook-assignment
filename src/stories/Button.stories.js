import Button from '../components/Button/Button'


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