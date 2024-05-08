import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios/axios';
const initialState = {
	user: null,
	token: null,
	isLoading: false,
	status: null,
};

//register

const registerUser = createAsyncThunk('auth/registerUser', async ({ username, password }) => {
	try {
		const { data } = await axios.post('auth/register', { username, password });

		if (data.token) {
			window.localStorage.setItem('token', data.token);
		}
		return data;
	} catch (error) {
		console.log(error, 'in first tryCatch block');
	}
});

//login

const loginUser = createAsyncThunk('auth/getme', async ({ username, password }) => {
	try {
		const { data } = await axios.post('auth/login', { username, password });

		if (data.token) {
			window.localStorage.setItem('token', data.token);
		}
		return data;
	} catch (error) {
		console.log(error, 'in first tryCatch block');
	}
});

// is logged user

const isLoggedUser = createAsyncThunk('auth/isLoggedUser', async () => {
	try {
		const { data } = await axios.get('auth/getMe');
		return data;
	} catch (error) {
		console.log(error, 'no server response');
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState, // state
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isLoading = false;
			state.status = null;
		},
	},
	extraReducers: (builder) => {
		//register user
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true;
			state.status = null;
		});
		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.message;
			state.user = payload.user;
			state.token = payload.token;
		});
		builder.addCase(registerUser.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.message;
		});
		//login user
		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
			state.status = null;
		});
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.message;
			state.user = payload.user;
			state.token = payload.token;
		});
		builder.addCase(loginUser.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.message;
		});
		// is Logged User
		builder.addCase(isLoggedUser.pending, (state) => {
			state.isLoading = true;
			state.status = null;
		});
		builder.addCase(isLoggedUser.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.status = null;
			state.user = payload?.user;
			state.token = payload?.token;
		});
		builder.addCase(isLoggedUser.rejected, (state) => {
			state.isLoading = false;
			state.status = null;
		});
	},
});

export const userIsLogged = (state) => Boolean(state.auth.token);

export { registerUser, loginUser, isLoggedUser };

export default authSlice.reducer;
