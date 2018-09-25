import * as types from './actionType';
import reducerName from './reducerName';

const initState = {
    type: types.HIDE
};

const reducer = (state = initState,action) => {
    const {type} = action;
    switch (type) {
        case types.SHOW: {
            return {
                ...state, type: type, tip: action.tip
            }
        }
        case types.HIDE: {
            return {
                ...state, type: type, tip: undefined
            }
        }
        default: {
            return state;
        }
    }
};

export default {
    [reducerName]: reducer
}