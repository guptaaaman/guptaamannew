function getCartDetails(UpdatedItems) {
    return (dispatch) => {
        dispatch({
            type: 'Get Items',
            data: UpdatedItems
        })
    }
}
export default getCartDetails;