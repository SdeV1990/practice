import { combineReducers } from "redux"

import quote from './quote'
import categories from './categories'

export default combineReducers({ quote, categories })