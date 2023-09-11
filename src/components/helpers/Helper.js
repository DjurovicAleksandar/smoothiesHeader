export const startAnimation = (isActive, smoothie, controls) => {
  if (isActive === smoothie) controls.start("visible");
  else controls.start("hidden");
};

export const colorAnimation = (isActive, arr, name) => {
  return {
    [name]:
      isActive === "red"
        ? arr[0]
        : isActive === "yellow"
        ? arr[1]
        : isActive === "green"
        ? arr[2]
        : arr[3],
  };
};
