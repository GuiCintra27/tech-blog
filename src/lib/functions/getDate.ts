import { months } from "@/utils/date-util";

export function getDate(date: Date) {
  return `${months[new Date(date).getMonth()]} 
  ${new Date(date).getDate()}, 
  ${new Date(date).getFullYear()}`;
}
