import { BreakpointsActions, BreakpointState } from "../../types";
import { breakpoints } from "../../config";

export const BreakpointsReducer = (
  state: BreakpointState,
  action: BreakpointsActions
): BreakpointState => {
  const { desktop, largeDesktop, tablet, mobile } = breakpoints;

  if (action.type === "DESKTOP_DEVICE") {
    return { type: "DESKTOP_DEVICE", min: desktop.min, max: desktop.max };
  }
  if (action.type === "LARGE_DESKTOP_DEVICE") {
    return {
      type: "LARGE_DESKTOP_DEVICE",
      min: largeDesktop.min,
      max: largeDesktop.max,
    };
  }
  if (action.type === "MOBILE_DEVICE") {
    return { type: "MOBILE_DEVICE", min: mobile.min, max: mobile.max };
  }
  if (action.type === "TABLET_DEVICE") {
    return { type: "TABLET_DEVICE", min: tablet.min, max: tablet.max };
  }
  return { type: "DESKTOP_DEVICE", min: desktop.min, max: desktop.max };
};
