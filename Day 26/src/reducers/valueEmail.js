const initialState = ""

const valueEmail = (state = initialState, action) => {
    if(action.type === "Email"){
        return state = action.payload
    }

    return state;

};

export default valueEmail;