const INITIAL_STATE = { count: 0 }

export default function counter(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return { ...state };
    }
}