const initialState = ""

const valueName = (state = initialState, action) => {
    if(action.type === "Name"){
        return state = action.payload
    }

    return state;

};

export default valueName;