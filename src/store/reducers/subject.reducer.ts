import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { GetSubject } from "../../utils/interfaces";
import { getSubjects } from "../actions/subjects.actions";

interface Subject {
    subjects: GetSubject[]
}

const initialState: Subject = {
    subjects: []
}



export default createReducer(initialState, builder =>
    builder.addCase(getSubjects.pending, state => {
    })
        .addCase(getSubjects.fulfilled, (state, { payload }:PayloadAction<GetSubject>) => {
            console.log(payload, state.subjects)
        })
        .addCase(getSubjects.rejected, (state, { error }) => {
            console.log("error", error)
        })
)
