// className helpers for tailwindcss

export const cx = (...classes: (string | false | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
