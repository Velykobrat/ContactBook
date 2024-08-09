import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',         // Фільтр для пошуку по імені
  status: 'all',    // Фільтр для статусу
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;  // Оновлення фільтру за ім'ям
    },
    setStatusFilter: (state, action) => {
      state.status = action.payload; // Оновлення статусного фільтру
    },
  },
});

export const { changeFilter, setStatusFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;
export const getStatusFilter = (state) => state.filters.status;

export default filtersSlice.reducer;
