import { testAPi } from "../utils/axios";
import { AddTestData, GetTagsData, TestWrap ,ESubject, Tag} from "../utils/interfaces";

export const getAllTests = (): Promise<TestWrap> => testAPi.get('/test-wrap')
export const getTestsBySubject = (subject: ESubject): Promise<TestWrap> => testAPi.get(`/test-wrap/subject/${subject}`)
export const getTestsById = (id: string): Promise<TestWrap> => testAPi.get(`/test-wrap/${id}`)
export const getTestsByUserId = (userId: string): Promise<TestWrap> => testAPi.get(`/test-wrap/user-id/${userId}`)
export const addTest = ({test,testWrapId}:AddTestData):Promise<TestWrap> => testAPi.put(`/test-wrap/${testWrapId}`, test)
export const createTest = (testWrap: TestWrap): Promise<TestWrap> => testAPi.post('/test-wrap', testWrap)
export const deleteTest = (testWrapId:string):Promise<void> => testAPi.delete(`/test-wrap/${testWrapId}`)
export const getTagsByFirstChatacters = ({subject,query}:GetTagsData):Promise<Tag[]> => testAPi.get(`/tag/${subject}/${query}`)