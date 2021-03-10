import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAllTests, fetchTagsByFirstChatacters, fetchTestsById,
  fetchTestsBySubject, fetchTestsByUserId, addTestToTestWrap,
  createTestWrap, deleteTestWrap
} from "../actions/tests.actions";


const initialState = {
    email: '',
    id: 0,
    roles: [],
    token: '',
    username: '',
    error: null,
    loading: false
}


export const defaultError = 'Somthing went wrong!'

export default createReducer(initialState, builder =>
  builder.addCase(fetchAllTests.pending, state => {
     
  })
    .addCase(fetchAllTests.fulfilled, (state, { payload }) => {
    
    })
    .addCase(fetchAllTests.rejected, (state, { error }) => {
      
    })
  


)
