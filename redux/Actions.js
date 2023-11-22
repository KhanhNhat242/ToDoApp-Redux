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

export const actionUpdate = (data) => {
    return {
        type: 'UPDATE',
        payload: data,
    }
}