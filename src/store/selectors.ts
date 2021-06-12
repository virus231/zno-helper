import {RootState} from "./store";

export const authSelector = (state: RootState) => state.auth
export const alertSelector = (state: RootState) => state.alert
export const subjectSelector = (state: RootState) => state.subjects
export const statisticsSelector = (state: RootState) => state.statistics