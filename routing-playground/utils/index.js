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

export const imageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};
