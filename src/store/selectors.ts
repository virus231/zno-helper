import {RootState} from "./store";

export const authSelector = (state: RootState) => state.auth
export const alertSelector = (state: RootState) => state.alert