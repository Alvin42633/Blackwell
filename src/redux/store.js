import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'user',
	storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
	reducer: {
		user: persistedUserReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
