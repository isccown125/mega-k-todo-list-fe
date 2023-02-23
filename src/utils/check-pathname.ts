export const checkPathname = (path: string) => {
  const { pathname } = window.location;

  return path === pathname;
};
