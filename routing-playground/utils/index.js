export const formatDate = (timestamp) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString("en-US", options);
  if (dateString) return dateString;
  else return undefined;
};
