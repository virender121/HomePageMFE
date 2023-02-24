import React from 'react'
import Searchbar from './Searchbar';



export default {
    title: 'Component/Searchbar',
    parameters: {
        component: Searchbar,
        componentSubtitle:'this component give us basic search bar this component we are going use multiple times',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Searchbar {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Searchbar'
}