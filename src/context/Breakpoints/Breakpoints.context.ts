import { createContext } from "react";
import { BreakpointState, BreakpointsActions } from "../../types";

export const breakpoint: BreakpointState = {
  type: "",
  min: 0,
  max: 0,
};

export const BreakpointsContext = createContext<{
  breakpointsState: BreakpointState;
  dispatch: React.Dispatch<BreakpointsActions>;
}>({
  breakpointsState: breakpoint,
  dispatch: () => null,
});
