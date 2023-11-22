export const actionAdd = (data) => {
    return {
        type: 'ADD',
        payload: data,
    }
}

export const actionDelete = (data) => {
    return {
        type: 'DELETE',
        payload: data,
    }
}