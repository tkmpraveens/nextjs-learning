export const yearList = [
  { option: "all", label: "All" },
  { option: "2022", label: "2022" },
  { option: "2023", label: "2023" },
];

export const getYearDetails = (y) => {
  const year = yearList.filter((i) => i.option === y);
  if (year?.length) return year[0];
  else undefined;
};
