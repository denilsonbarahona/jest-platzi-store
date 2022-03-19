import productMock from "../../__mocks__/productMock";
import reducer from "../../reducers";

describe('reducers',()=>{
    test('retornar initial state',()=>{
        expect(reducer({},'')).toEqual({})
    })

    test('add to cart',()=>{
        const initialState = { cart:[] }
        const payload = productMock
        const action ={ type: 'ADD_TO_CART', payload }
        const expected = { cart:[productMock]}
        expect(reducer(initialState, action)).toEqual(expected)
    })
})

