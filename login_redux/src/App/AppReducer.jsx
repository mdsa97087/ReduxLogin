import { ADD, REDUCE } from './ActionType';

const initialState= {
      count:0
}


function AppReducer(oldState=initialState, action) {
  switch(action.type) {
      case ADD:
            return {
                  count:oldState.count+1
            }
      case REDUCE :
            return {
                  count:oldState.count-1
            }
      default :
      return oldState;
  }
}

export default AppReducer