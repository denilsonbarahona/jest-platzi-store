import React from "react"
import Footer from "../../components/Footer"
import { mount } from "enzyme"
import {create} from 'react-test-renderer'


describe('<footer/>',()=>{
    const footer = mount(<Footer/>)

    test('Render del componente Footer', ()=>{
        expect(footer.length).toEqual(1)
    })

    test('Render del titulo', ()=>{
        expect(footer.find('.Footer-title').text()).toEqual("Platzi Store")
    })

    test('create snapshot', ()=>{
        const footer = create(<Footer/>)
        expect(footer.toJSON()).toMatchSnapshot()
    })
})
