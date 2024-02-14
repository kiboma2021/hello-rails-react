import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you'll have separate reducers

const store = configureStore(rootReducer);

export default store;