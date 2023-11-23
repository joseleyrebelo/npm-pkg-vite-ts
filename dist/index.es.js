const sample_func = (required, optional) => {
  console.log(
    optional ? "This is a two args instance : " + required + optional : "This is the one arg instance: " + required
  );
};
export {
  sample_func
};
