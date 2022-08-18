import {createPasswordActionsType} from "./createPasswordActions";
import {createPasswordInitialState, createPasswordInitialStateType} from "./createPasswordInitialState";

export const createPasswordReducer = (state = createPasswordInitialState, action: createPasswordActionsType): createPasswordInitialStateType => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
