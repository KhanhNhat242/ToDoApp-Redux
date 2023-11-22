const initState = []

export const reducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD': 
            return [...state, action.payload]

        case 'DELETE': {
            const newState = [...state]

            newState.splice(action.payload, 1)

            return [...newState]
        }

        case 'UPDATE': {
            const newState = [...state]
            newState[action.payload.index] = action.payload.job 

            return [...newState]
        }

        default: 
            return state
    }
}