// action types
export const HOME_ACTION = "HOME/ACTION"

let initialState = {
    counter: 0
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case HOME_ACTION:
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
}

export const anAction = () => (dispatch) => {
    dispatch({ type: HOME_ACTION });
}