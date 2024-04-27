import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: []
};

const quizManagementSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuiz: (state, action) => {
            state.questions = [...state.questions, action.payload]
            return state;
        }
    },
});

export default quizManagementSlice.reducer;

export const {
    setQuiz,
} = quizManagementSlice.actions; 