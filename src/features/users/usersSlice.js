import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Mathew Forest' },
  { id: '1', name: 'Neil Wald' },
  { id: '2', name: 'Country Men' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
