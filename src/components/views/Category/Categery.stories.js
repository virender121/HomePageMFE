import React from 'react'
import Categery from './Categery';



export default {
    title: 'Component/Categery',
    parameters: {
        component: Categery,
        componentSubtitle:'this component                 for categories     item in our app',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Categery {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Categery'
}