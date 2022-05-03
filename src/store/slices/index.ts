import { combineReducers } from 'redux';
import treeReducer from './tree.slice';
import fileReducer from './file.slice';

export default combineReducers({
  tree: treeReducer,
  file: fileReducer,
});
