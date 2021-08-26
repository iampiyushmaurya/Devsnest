const updateName = (input) => {
    return {
        type : "Name",
        payload: input,
    };
};

const updateEmail= (input) => {
    return {
        type : "Email",
        payload: input,

    };
};

export {updateName, updateEmail};