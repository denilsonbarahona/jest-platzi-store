import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
import Header from '../../components/Header'
import ProviderMock from '../../__mocks__/providerMock'

describe('Header',()=>{
    test('Render del componente header',()=>{
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );

        expect(header.length).toBe(1)
    })

    test('Render del titulo',()=>{
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.find(".Header-title").text()).toEqual('Platzi Store')
    })

    test('footer snapshot',()=>{
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )

        expect(header.toJSON()).toMatchSnapshot()
    })
})
