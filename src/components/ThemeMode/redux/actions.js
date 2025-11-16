export const toggleMode = (mode) => {
  return {
    type: 'CHANGE',
    payload: { isDark: !mode },
  };
};
