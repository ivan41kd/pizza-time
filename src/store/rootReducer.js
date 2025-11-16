import ThemeReducer from '@/components/ThemeMode/redux/reducer';
import CartReducer from '@/entities/Cart/redux/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  cart: CartReducer,
  mode: ThemeReducer,
});
