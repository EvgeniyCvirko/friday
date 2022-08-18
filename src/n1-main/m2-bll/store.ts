import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {singInReducer} from "../../n2-featuries/a1-sing-in/s2-bll/b-2-redux/singInReducer";
import {registerReducer} from "../../n2-featuries/a2-register/r2-bll/registerReducer";
import {profileReducer} from "../../n2-featuries/a3-profile/p2-bll/profileReducer";
import {recoveryPasswordReducer} from "../../n2-featuries/a5-recovery-password/r2-bll/recoveryPasswordReducer";
import {createPasswordReducer} from "../../n2-featuries/a6-create-password/c2-bll/createPasswordReducer";


const rootReducer = combineReducers({
        singIn:singInReducer,
        register: registerReducer,
        profile: profileReducer,
        recoveryPassword: recoveryPasswordReducer,
        createPassword: createPasswordReducer,
});

export const store =createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType,unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction< ReturnType,AppRootStateType,unknown, AnyAction>
// @ts-ignore
window.store = store