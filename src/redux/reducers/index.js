const initialState = {
    cart: {
    favourite: []
    }
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_TO_FAVOURITE":
            return{
                ...state,
                cart: {
                    ...state.cart,
                    favourite: [...state.cart.content, action.payload],
                }
            }

            
    default: {
        return state
    }
    }
}

export default mainReducer