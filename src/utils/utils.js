export function formatDateToIsraelLocale(dateTimeString) {
  const date = new Date(dateTimeString);

  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Jerusalem",
  };

  return date.toLocaleString("en-IL", options).replace(",", "");
}
