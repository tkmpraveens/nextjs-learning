export const monthList = [
  { option: "all", label: "All" },
  { option: "jan", label: "January" },
  { option: "feb", label: "February" },
  { option: "mar", label: "March" },
  { option: "apr", label: "April" },
  { option: "may", label: "May" },
  { option: "jun", label: "June" },
  { option: "jul", label: "July" },
  { option: "aug", label: "August" },
  { option: "sep", label: "September" },
  { option: "oct", label: "October" },
  { option: "nov", label: "November" },
  { option: "dec", label: "December" },
];

export const getMonthDetails = (m) => {
  const month = monthList.filter((i) => i.option === m);
  if (month?.length) return month[0];
  else undefined;
};
