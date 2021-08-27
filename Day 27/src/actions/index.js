const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item,
        }
}

const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id,
        
    }
}

export {addItem, deleteItem};