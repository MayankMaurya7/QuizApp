import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allUserDataBase :[
        {
            email: 'komaldeep@gmail.com',
            password:'1234',
            id:"1233-43412-4324-76754"
        },
        {
            email: 'mayank@gmail.com',
            password:'12345',
            id:"1233-876-344-7653"
        }
    ],
    currentUserData :{},
};

const userManagementSlice = createSlice({
	name: 'userDetails',
	initialState,
	reducers: {
		setCurrentUserData: (state, action) => {
			state.currentUserData = action.payload;
		},
        setAllUserDataBase:(state, action) => {
			state.currentUserData = action.payload;
		},
	},
});

export default userManagementSlice.reducer;

export const {
	setCurrentUserData,
	setAllUserDataBase,
} = userManagementSlice.actions;