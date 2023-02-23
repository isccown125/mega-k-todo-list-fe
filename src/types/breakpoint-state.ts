export type BreakpointState = {
  type: string;
  min: number | null;
  max: number | null;
};

export type BreakpointsActions =
  | { type: "MOBILE_DEVICE" }
  | { type: "TABLET_DEVICE" }
  | { type: "DESKTOP_DEVICE" }
  | { type: "LARGE_DESKTOP_DEVICE" };
