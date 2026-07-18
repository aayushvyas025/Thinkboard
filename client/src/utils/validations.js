export function inputValidations({ title, description }) {
  if (
    !title.trim() ||
    !description.trim() ||
    typeof title !== "string" ||
    typeof description !== "string"
  ) {
    return {
      success: false,
      message: "Title and Description required",
    };
  }

  return {
    success: true,
    message: "Note successfully created",
  };
}
