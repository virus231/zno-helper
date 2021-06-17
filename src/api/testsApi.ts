import { axios, testAPi } from "../utils/axios";
import { AddTestData, GetTagsData, TestWrap, ESubject, Tag, Question, Difficulty, GetSubjectStatistic } from "../utils/interfaces";

export const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer
        ]),
    }));
};


export const getAllTests = (): Promise<TestWrap> => testAPi.get('/test-wrap')
export const getTestsBySubject = (subject: ESubject): Promise<TestWrap> => testAPi.get(`/test-wrap/subject/${subject}`)
export const getTestsById = (id: string): Promise<TestWrap> => testAPi.get(`/test-wrap/${id}`)
export const getTestsByUserId = (userId: string): Promise<TestWrap> => testAPi.get(`/test-wrap/user-id/${userId}`)
export const addTest = ({ test, testWrapId }: AddTestData): Promise<TestWrap> => testAPi.put(`/test-wrap/${testWrapId}`, test)
export const createTest = (testWrap: TestWrap): Promise<TestWrap> => testAPi.post('/test-wrap', testWrap)
export const deleteTest = (testWrapId: string): Promise<void> => testAPi.delete(`/test-wrap/${testWrapId}`)
export const getTagsByFirstChatacters = ({ subject, query }: GetTagsData): Promise<Tag[]> => testAPi.get(`/tag/${subject}/${query}`)
export const getStatisticBySubject = (subject): Promise<any> => axios.get(`/statistic/${subject}`)
export const getUserStatistics = () => axios.get('/statistic')
export const addStat = (statWrap: GetSubjectStatistic): Promise<GetSubjectStatistic> => axios.post('/statistic', statWrap)