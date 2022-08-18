import {profileInitialState, profileInitialStateType} from "./profileInitialState";
import {profileActionsType} from "./profileActions";

export const profileReducer = (state = profileInitialState, action: profileActionsType):profileInitialStateType => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
