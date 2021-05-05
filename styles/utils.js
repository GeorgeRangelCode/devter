export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(15);

  return `${color}${opacityHex}`;
};
