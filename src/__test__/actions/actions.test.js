import productMock from "../../__mocks__/productMock";
import actions from '../../actions/'

describe('actions describe',()=>{
    test('addToCart action',()=>{
        const payload = productMock;
        const expected = {type: 'ADD_TO_CART', payload }
        expect(actions.addToCart(payload)).toEqual(expected)
    })
})

