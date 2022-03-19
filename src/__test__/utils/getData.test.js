import getData from "../../utils/getData";

describe('Fetch API',()=>{
    beforeEach(()=>{
        fetch.resetMocks();
    })

    test('Llama una api y retornar datos',()=>{
        fetch.mockResponseOnce(JSON.stringify({data: '123456'}))
        getData('www.google.com')
            .then(response=>{
                expect(response.data).toEqual('123456')
            })
        expect(fetch.mock.calls[0][0]).toEqual('www.google.com')
    })
})

