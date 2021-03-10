export interface AuthResponse {
    token: string,
    id: number,
    email: string,
    username: string,
    roles:string[]
}

export interface RegisterBody{
    email: string,
    password: string,
    phone: string,
    referral?: string,
    role?: string[],
    username:string
}


export interface LoginBody{
    username: string,
    password:string
}


export interface CheckResponse {
    valid:boolean
}

export interface SmsResponse {
    code: string
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

export interface TestWrap extends TestBlock
{
    title: string,
    subject: string,
    userId: number,
    tags?: Tag[] | null,
    tests: Test[]
}

export interface Tag extends TestBlock
{
    subject: string,
    title: string
}

export interface Test extends TestBlock
{
    title: Block,
    content: string,
    explanation: string,
    time: number
}


// Block Content

enum EInfoTypes {
    TEXT,
    IMAGE,
    VIDEO,
    AUDIO
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
    subject: ESubject,
    query:string
}
