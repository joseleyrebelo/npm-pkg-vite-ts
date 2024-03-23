export const sample_func = (required: string, optional?: string) => {
  return "args: " + (optional ? required + ";" + optional : required);
};
