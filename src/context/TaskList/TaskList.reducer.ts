export const isSavedReducer = (
  state: { isValid: boolean },
  action: { type: string }
) => {
  if (action.type === "SAVING_LIST") {
    return { isValid: false };
  }
  if (action.type === "SAVED_LIST") {
    return { isValid: true };
  }
  if (action.type === "MODIFY_LIST") {
    return { isValid: false };
  }
  return { isValid: state.isValid };
};
