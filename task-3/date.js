export function convertHoursToMinutes(hours) {
    return hours === 0 ? 0 : hours * 60;
}

export function convertMinutesToHours(mins) {
    return mins === 0 ? 0 : Math.floor(mins / 60)
}

export function convertDaysToHours(days) {
    return days === 0 ? 0 : days * 24;
}

export function convertHoursToDays(hours) {
    return hours === 0 ? 0 : Math.floor(hours / 24);
}

export function convertMinutesToSeconds(mins) {
    return mins === 0 ? 0 : mins * 60;
}
export function convertSecondsToMinutes (secs) {
    return secs === 0 ? 0 : Math.floor(secs / 60);
}
