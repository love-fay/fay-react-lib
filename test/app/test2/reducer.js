import * as types from './actionType';
import reducerName from './reducerName'

const initState = {};

const reducer = (state = initState,action) => {
    const {type} = action;
    switch (type) {
        case types.INIT: {
            return {type}
        }
        default: {
            return state;
        }
    }
};

export default {
    [reducerName]: reducer
}