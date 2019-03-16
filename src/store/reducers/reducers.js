
const initialState = {
    products:[]
}

export const reducer=(state=initialState, action)=>{

const newState = {
    ...state
}

switch(action.type){
    case "get_products":
        return {
            loading:false,
            products:action.payload,

        };
    case "loading":
        return {
            loading:true
        }
}

return newState;


}