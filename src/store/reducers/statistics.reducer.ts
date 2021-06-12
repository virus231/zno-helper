
import {createReducer} from '@reduxjs/toolkit';
import {getAllStats, getStatsBySubject} from '../actions/statistics.actions';

const initialState = {
  stats: [],
  loading: false,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(getAllStats.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllStats.fulfilled, (state, {payload}:any) => {
      console.log('got from Api all stats', payload);
      state.stats = payload;
      state.loading = false;
    })
    .addCase(getAllStats.rejected, (state, {error}) => {
      console.log('error getting stats', error);
      state.loading = false;
    })
    .addCase(getStatsBySubject.pending, (state) => {
      state.loading = true;
      state.stats = [];
    })
    .addCase(getStatsBySubject.fulfilled, (state, {payload}:any) => {
      state.stats = payload;
      state.loading = false;
      console.log('got from Api  stats by subject', payload);
    })
    .addCase(getStatsBySubject.rejected, (state, {error}) => {
      console.log('error getting stat by subject', error);
      state.loading = false;
    }),
);