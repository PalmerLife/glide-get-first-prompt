window.function = function(string) {
  const value = string.value;
  if (typeof value !== "string") {
    return "";
  }
  const parts = value.split(",");
  return parts[0].trim();
}
