export const sample_func = (required: string, optional: string) => {
  console.log(
    optional
      ? "This is a two args instance : " + required + "" + optional
      : "This is the one arg instance: " + required
  );
};

// export default __sample_func;
