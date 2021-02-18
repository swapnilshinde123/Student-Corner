import action from "./action";


const initialState = {
    user:undefined

}

export default (state = initialState, actions) => {
    switch (actions.type) {

    case action.type:
        return { 
            user:actions.payload
        }

    default:
        return state
    }
}
