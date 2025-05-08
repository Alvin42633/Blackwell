import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: null,
};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.user = action.payload;
		},
		updateUser: (state, action) => {
			state.user = action.payload;
		},
		logoutUser: (state) => {
			state.user = null;
		},
	},
});

export const { loginUser, updateUser, logoutUser } = userReducer.actions;
export default userReducer.reducer;
