export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDate(date: Date) {
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  
  return `${month} ${day}, ${year}`;
}
