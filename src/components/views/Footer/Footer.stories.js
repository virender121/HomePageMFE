import React from 'react'
import Footer from './Footer';



export default {
    title: 'Component/Footer',
    parameters: {
        component: Footer,
        componentSubtitle:'this the footer components in my app ...',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Footer {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Footer'
}