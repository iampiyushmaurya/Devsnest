const placeReducer = (state = "Noida",action) => {
    if(action.type === "UPADTE_PLACE"){
        return action.payload;
    }
    return state;
};

export default placeReducer;