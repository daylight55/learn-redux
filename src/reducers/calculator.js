import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  beforeInput: '',
  currentInput: '',
  resultValue: 0,
  showingInput: false,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      currentInput: state.inputValue,
      beforeInput: state.inputValue,
      inputValue: state.inputValue * 10 + action.number,
      showingInput: true,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      inputValue: 0,
      beforeInput: state.beforeInput + '+',
      resultValue: state.resultValue + state.inputValue,
      showingResult: true,
    };
  } else if (action.type === actionTypes.EQUAL) {
    return {
      ...state,
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true,
    }
  } else {
    return state;
  }
};

export default calculator;
