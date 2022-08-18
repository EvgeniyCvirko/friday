import {recoveryPasswordInitialState, recoveryPasswordInitialStateType} from "./recoveryPasswordInitialState";
import {profileActionsType} from "../../a3-profile/p2-bll/profileActions";

export const recoveryPasswordReducer = (state = recoveryPasswordInitialState, action: profileActionsType):recoveryPasswordInitialStateType => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
