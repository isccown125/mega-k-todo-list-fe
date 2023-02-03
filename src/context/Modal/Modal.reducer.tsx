import { checkTitle } from "../../utils";

export const titleReducer = (
  state: { value: string; isValid: boolean },
  action: { type: string; value: string; isValid: boolean }
) => {
  if (action.type === "ADD_TASK") {
    return { value: state.value, isValid: checkTitle(state.value) };
  }
  if (action.type === "INPUT_TITLE") {
    return { value: action.value, isValid: checkTitle(state.value) };
  }
  if (action.type === "CLEAR") {
    return { value: "", isValid: false };
  }
  return { value: "", isValid: false };
};
