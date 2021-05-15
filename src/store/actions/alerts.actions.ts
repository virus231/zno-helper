import { createAction } from "@reduxjs/toolkit";

export const showAlert = createAction<{text:string,type:string}>('showAlert');
