import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { TestWrap } from "../../utils/interfaces";
import {
  fetchAllTests, fetchTagsByFirstChatacters, fetchTestsById,
  fetchTestsBySubject, fetchTestsByUserId, addTestToTestWrap,
  createTestWrap, deleteTestWrap, fetchStatisticBySubject, fetchUserStatistic, addStatistic
} from "../actions/tests.actions";


const initialState: TestWrap = {
    userId: 0,
    title: "",
    subject: "",
    tests: [],
    tags: null,
    content: {},
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
    }).addCase(fetchStatisticBySubject.pending, state => {
      console.log(state)
  }).addCase(fetchStatisticBySubject.rejected, (state,{error}) => {
      console.log(state)
  }).addCase(fetchStatisticBySubject.fulfilled, (state, {payload}) => {
      console.log("payload", payload)
  }).addCase(fetchUserStatistic.pending, state => {
      console.log(state)
  }).addCase(fetchUserStatistic.rejected, (state,{error}) => {
      console.log(state)
  }).addCase(fetchUserStatistic.fulfilled, (state, {payload}) => {
      console.log("payload user statistic all", payload)
  }).addCase(addStatistic.pending, state => {
      console.log(state)
  }).addCase(addStatistic.rejected, (state,{error}) => {
      console.log(state)
  }).addCase(addStatistic.fulfilled, (state, {payload}) => {
      console.log("payload", payload)
  })
)
