import { breakpoint, BreakpointsContext } from "./Breakpoints.context";
import React, { useReducer } from "react";
import { BreakpointsReducer } from "./Breakpoints.reducer";
import { breakpoints } from "../../config";

const initBreakpoint = () => {
  const { desktop, largeDesktop, tablet, mobile } = breakpoints;
  const width = window.innerWidth;
  if (width >= desktop.min && width <= desktop.max) {
    return { type: "DESKTOP_DEVICE", min: desktop.min, max: desktop.max };
  }
  if (width >= largeDesktop.min && width <= largeDesktop.max) {
    return {
      type: "LARGE_DESKTOP_DEVICE",
      min: largeDesktop.min,
      max: largeDesktop.max,
    };
  }
  if (width >= tablet.min && width <= tablet.max) {
    return { type: "TABLET_DEVICE", min: tablet.min, max: tablet.max };
  }
  if (width >= mobile.min && width <= mobile.max) {
    return { type: "MOBILE_DEVICE", min: mobile.min, max: mobile.max };
  }

  return { type: "DESKTOP_DEVICE", min: desktop.min, max: desktop.max };
};

const BreakpointsProvider = ({ children }: { children: React.ReactNode }) => {
  const [breakpoints, dispatch] = useReducer(
    BreakpointsReducer,
    breakpoint,
    initBreakpoint
  );

  return (
    <BreakpointsContext.Provider
      value={{ breakpointsState: { ...breakpoints }, dispatch: dispatch }}
    >
      {children}
    </BreakpointsContext.Provider>
  );
};

export default BreakpointsProvider;
