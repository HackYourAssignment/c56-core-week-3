function convertHoursToMinutes(hours) {
  return hours * 60;
}

function convertMinutesToHours(minutes) {
  return minutes / 60;
}

function convertDaysToHours(days) {
  return days * 24;
}

function convertHoursToDays(hours) {
  return hours / 24;
}

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function convertSecondsToMinutes(seconds) {
  return seconds / 60;
}

export {
  convertHoursToMinutes,
  convertMinutesToHours,
  convertDaysToHours,
  convertHoursToDays,
  convertMinutesToSeconds,
  convertSecondsToMinutes
};