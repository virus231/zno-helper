import { testAPi } from "../utils/axios";
import { GetSubject } from "../utils/interfaces";

export const getAllSubject = (): Promise<GetSubject> => testAPi.get('/subject')