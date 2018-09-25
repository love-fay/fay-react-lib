import * as types from './actionType';

export const show = (tip) =>({
    type: types.SHOW,
    tip
});

export const hide = () =>({
    type: types.HIDE
});
