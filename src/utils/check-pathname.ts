export const checkPathname = (path: string) => {
  const { pathname } = window.location;
  if (path === pathname) {
    return true;
  }
  return false;
};
