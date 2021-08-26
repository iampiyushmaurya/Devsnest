import valueEmail from "./valueEmail";
import valueName from "./valueName";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Name : valueName,
    Email : valueEmail, 
});

export default rootReducer;