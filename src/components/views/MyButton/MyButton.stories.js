import React from 'react'
import MyButton from './MyButton';



export default {
    title: 'Component/MyButton',
    parameters: {
        component: MyButton,
        componentSubtitle:'button componenet .....................................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <MyButton {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'MyButton'
}