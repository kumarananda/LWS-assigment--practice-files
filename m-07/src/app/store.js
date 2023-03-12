import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice'
import edtingjobReducer from '../features/editingJob/jobEditingSlice'
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    jobEditing : edtingjobReducer,
    filter : filterReducer
  },
});
