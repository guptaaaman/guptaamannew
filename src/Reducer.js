function cartReducer(state = {}, action) {
    switch (action.type) {
        case ('Get Items'): return {

            cartItem: action.data
        }
        default: {
            return state
        }
    }
}
export default cartReducer;