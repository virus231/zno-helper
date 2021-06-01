export interface AuthResponse {
    token: string,
    id: number,
    email: string,
    username: string,
    roles: string[]
    isAuth?: string
}


export interface RegisterBody{
    email: string,
    password: string,
    phone: string,
    otpnum:number,
    referral?: string,
    role?: string[],
    username:string
}


export interface LoginBody{
    phone: string,
    password:string
}


export interface CheckResponse {
    valid:boolean
}

export interface SmsResponse {
    code: string
}

export interface CheckCode {
    response: object
}

export interface StateHadnlers {
    error: string | null,
    loading: boolean
}

export interface Validation {
    emailValid: boolean,
    phoneValid: boolean,
    usernameValid: boolean,
    emailError: string | null,
    phoneError: string | null,
    usernameError: string | null,
    loading:boolean
}

export interface CurrentUser {
    active: boolean,
    avatar: string,
    email: string,
    id: number,
    online: boolean,
    password: string,
    premium: boolean,
    referral?: string,
    role?: string[],
    username: string
}

// Subjects
export enum ESubject {
    GEOGRAPHY,
    HISTORY_OF_UKRAINE,
    UKRAINIAN_LANGUAGE,
    UKRAINIAN_LITERATURE,
    MATHEMATICS,
    ENGLISH,
    BIOLOGY,
    PHYSICS,
    CHEMISTRY
}

interface TestBlock {
    type: ESubject
}

export interface TestWrap
{
    content: {
        answer?: string
    },
    id?: string,
    title: string,
    subject: string,
    userId: number,
    tags?: Tag[] | null,
    tests: Test[]
}

export type QuestionState = TestWrap & { answer: string }


export interface Tag extends TestBlock
{
    subject: string,
    title: string
}

export interface Test extends TestBlock
{
    title: {
        type: string,
        text:string
    },
    content: Content,
    explanation: {
        type: string,
        text:string
    },
    time: number
}

export type Content  =  TestSingleAnswer | TestMultiAnswer | TestBoolean | TestAccordence | TestSingleImagesAnswer | TestMultiImagesAnswer | {}
// Block Content

enum EInfoTypes {
    TEXT,
    IMAGE,
    VIDEO,
    AUDIO
}

export interface LocalTest extends Omit<Test,'type'>{
    collapsed: boolean,
    id: number,
    content: any
}

type TestUpdateFunction = (id: number) => void
export interface TestProps  {
    test: LocalTest
    removeTest: TestUpdateFunction
    changeCollapseState: TestUpdateFunction
    testIndex: number
    changeTitle: (id:number,title:string) => void
    changeExplanation: (id: number, explanation: string) => void
    tests: LocalTest[]
    updateTests: (tests: LocalTest[]) => void
    changeMode: (idx:number,mode:string) => void
}

interface Block{
    type: EInfoTypes
}

export interface BlockText extends Block 
{
    text: String
}

export interface BlockImage extends Block 
{
    title: String
    imageUrl: String
}

export interface BlockVideo extends Block 
{
    videoUrl: String
}

export interface BlockAudio extends Block 
{
    audioUrl: String
}


// Test Content
enum ETestType {
    SINGLE_ANSWER,
    SINGLE_IMAGES_ANSWER,
    MULTI_ANSWER,
    MULTI_IMAGES_ANSWER,
    BOOLEAN,
    ACCORDANCE
}

interface TestContent {
    type: ETestType
}

export interface TestSingleAnswer extends TestContent
{
    options: string[],
    answer: string
}

export interface TestMultiAnswer extends TestContent
{
    options: string[],
    answer: string[]
}

export interface TestBoolean extends TestContent
{
    question: string,
    answer: boolean
}

export interface TestAccordence extends TestContent
{
    accordancies: { [key: string]: string; }
}


export interface TestSingleImagesAnswer extends TestContent
{
    images: string[],
    answer: string
}

export interface TestMultiImagesAnswer extends TestContent
{
    images: string[],
    answer: string[]
}

export interface AddTestData {
    test: Test,
    testWrapId:string
}

export interface GetTagsData{
    subject: string,
    query: string
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// export type QuestionState = Question & { answers: string[] }
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export  interface Subjects {
    subjects: GetSubject[]
}

export interface GetSubject {
    id: string,
    subject: string,
    title: string
}

export interface GetSubjectStatistic {
    correct: number
    id:	number
    missed:	number
    subject: ESubject
    testTitle:	string
    testWrapID:	string
    total:	number
    userId:	number
    wrong:	number
}