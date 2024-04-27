import { configureStore } from '@reduxjs/toolkit';

import {
    userManagementReducer,
    quizManagementReducer
} from './slices';

export default configureStore({
    reducer: {
        userData: userManagementReducer,
        quizData: quizManagementReducer
    },
});
