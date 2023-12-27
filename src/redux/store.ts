import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import footerReducer from './features/footerSlice';

const rootReducer = combineReducers({
	footer: footerReducer,
	// ...other reducers
});

const store = configureStore({
	reducer: rootReducer, // Use rootReducer directly
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
