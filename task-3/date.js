const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const SECONDS_PER_MINUTE = 60;

export function convertHoursToMinutes(hours) {
  return hours * MINUTES_PER_HOUR;
}

export function convertMinutesToHours(minutes) {
  return minutes / MINUTES_PER_HOUR;
}

export function convertDaysToHours(days) {
  return days * HOURS_PER_DAY;
}

export function convertHoursToDays(hours) {
  return hours / HOURS_PER_DAY;
}

export function convertMinutesToSeconds(minutes) {
  return minutes * SECONDS_PER_MINUTE;
}

export function convertSecondsToMinutes(seconds) {
  return seconds / SECONDS_PER_MINUTE;
}
