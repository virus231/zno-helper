import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { TestWrap } from "../../utils/interfaces";
import {
  fetchAllTests, fetchTagsByFirstChatacters, fetchTestsById,
  fetchTestsBySubject, fetchTestsByUserId, addTestToTestWrap,
  createTestWrap, deleteTestWrap
} from "../actions/tests.actions";


const initialState: TestWrap = {
    userId: 0,
    title: "",
    subject: "",
    tests: [],
    tags: null,
}


export const defaultError = 'Something went wrong!'

export default createReducer(initialState, builder =>
  builder.addCase(createTestWrap.pending, state => {
  })
    .addCase(createTestWrap.fulfilled, (state, { payload }) => {
        console.log("payload", payload)
    })
    .addCase(createTestWrap.rejected, (state, { error }) => {
        console.log("error", error)
    })
)
