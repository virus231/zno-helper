import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTests, getTestsById, getTestsBySubject, getTestsByUserId,createTest,addTest, getTagsByFirstChatacters, deleteTest } from "../../api/testsApi";
import { AddTestData, ESubject, GetTagsData, Tag, TestWrap } from "../../utils/interfaces";

export const fetchAllTests = createAsyncThunk<TestWrap>('GET_ALL_TESTS', () => getAllTests())
export const fetchTestsById = createAsyncThunk<TestWrap,string>('GET_TESTS_BY_ID', id => getTestsById(id))
export const fetchTestsBySubject = createAsyncThunk<TestWrap,ESubject>('GET_TESTS_BY_SUBJECT', subject => getTestsBySubject(subject))
export const fetchTestsByUserId = createAsyncThunk<TestWrap, string>('GET_TESTS_BY_USER_ID', userId => getTestsByUserId(userId))
export const createTestWrap = createAsyncThunk<TestWrap,TestWrap>('CREATE_TEST_WRAP', testWrap => createTest(testWrap))
export const addTestToTestWrap = createAsyncThunk<TestWrap, AddTestData>('ADD_TEST_TO_TESTWRAP', data => addTest(data))

export const fetchTagsByFirstChatacters = createAsyncThunk<Tag[],GetTagsData>('GET_TAGS_BY_FIRST_CHARACTERS', data => getTagsByFirstChatacters(data))
export const deleteTestWrap = createAsyncThunk<void,string>('DELETE_TESTWRAP',testWrapId => deleteTest(testWrapId))

