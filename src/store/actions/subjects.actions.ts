import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSubject } from "../../api/subjectApi";
import { GetSubject } from "../../utils/interfaces";

export const getSubjects = createAsyncThunk('getSubjects', () => {
    return getAllSubject();
})