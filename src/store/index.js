import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['timers', 'questions', 'answers'],
}

const persistedReducer = persistCombineReducers(persistConfig, {

})

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
