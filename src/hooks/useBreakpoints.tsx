import { useContext, useEffect } from "react";
import { BreakpointsContext } from "../context/Breakpoints/Breakpoints.context";
import { breakpoints } from "../config";

export const useBreakpoints = () => {
  const { dispatch } = useContext(BreakpointsContext);
  const { desktop, largeDesktop, tablet, mobile } = breakpoints;
  let currentWidth = window.innerWidth;
  useEffect(() => {
    const handleResize = () => {
      if (currentWidth >= desktop.min && currentWidth <= desktop.max) {
        dispatch({ type: "DESKTOP_DEVICE" });
      }
      if (
        currentWidth >= largeDesktop.min &&
        currentWidth <= largeDesktop.max
      ) {
        dispatch({ type: "LARGE_DESKTOP_DEVICE" });
      }
      if (currentWidth >= tablet.min && currentWidth <= tablet.max) {
        dispatch({ type: "TABLET_DEVICE" });
      }
      if (currentWidth >= mobile.min && currentWidth <= mobile.max) {
        dispatch({ type: "MOBILE_DEVICE" });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return currentWidth;
};
