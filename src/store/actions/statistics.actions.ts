import { createAsyncThunk } from "@reduxjs/toolkit";
import { addStat, getStatisticBySubject, getUserStatistics  } from "../../api/testsApi";
import { ESubject, GetSubjectStatistic } from "../../utils/interfaces";

export const getAllStats = createAsyncThunk('getStats', () => getUserStatistics())
export const getStatsBySubject = createAsyncThunk<GetSubjectStatistic, ESubject>('getSubjectStats', (subject) => getStatisticBySubject(subject))
export const addStatistic = createAsyncThunk<GetSubjectStatistic, any>('ADD_STATISTIC', statWrap => addStat(statWrap))

// export const fetchStatisticBySubject = createAsyncThunk('GET_STATISTIC_BY_SUBJECT',subject => getStatisticBySubject(subject))
// export const fetchUserStatistic = createAsyncThunk('GET_USER_STATISTIC', () => getFindUserStatistic())