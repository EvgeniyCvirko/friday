import {registerActionsType} from "./registerActions";
import {registerInitialState, registerInitialStateType} from "./registerInitialState";

export const registerReducer = (state = registerInitialState, action: registerActionsType):registerInitialStateType => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
