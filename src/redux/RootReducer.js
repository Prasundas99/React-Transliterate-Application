import { combineReducers } from "redux";
import translateReducer from "./translate/translate.reducer";

const rootReducer = combineReducers({
  translateLanguage: translateReducer,
});

export default rootReducer;
