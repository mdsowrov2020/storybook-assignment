import Input from "../components/Input/Input";

export default{
    title: 'Input',
    component: Input
}

const Template = args => <Input {...args}/>

export const Init =  Template.bind({})

Init.args={
    placeholder: 'First name',
    name: 'fname',
    value: 'Mr Jack',
}