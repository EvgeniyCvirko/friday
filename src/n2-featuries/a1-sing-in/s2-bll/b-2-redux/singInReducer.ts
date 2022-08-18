import {singInInitialState, singInInitialStateType} from "./singInInitialState";
import { singInActionsType} from "./singInActions";

export const singInReducer = (state = singInInitialState, action: singInActionsType):singInInitialStateType => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
