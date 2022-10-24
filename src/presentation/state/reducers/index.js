import { combineReducers } from "redux"

import mainReducer from "./main"

const rootReducers = combineReducers({ main: mainReducer })

export default rootReducers
