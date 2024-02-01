export const timeFormatting = (time) => {
  const timeEventAt = new Date(time);
  const now = new Date();
  const msBetweenDates = timeEventAt.getTime() - now.getTime();
  const minutesDifference = Math.floor(msBetweenDates / (60 * 1000));
  const hoursDifference = Math.floor(msBetweenDates / (60 * 60 * 1000));
  const daysDifference = Math.floor(msBetweenDates / (24 * 60 * 60 * 1000));

  if (minutesDifference < 1) {
    return "עכשיו";
  }
  if (minutesDifference < 60) {
    return `בעוד ${minutesDifference} דקות`;
  }
  if (hoursDifference < 24) {
    return `בעוד כ-${hoursDifference} שעות`;
  }
  if (daysDifference === 0) {
    return `ב${timeEventAt.toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
  }
  if (daysDifference === 1) {
    return `מחר ב${timeEventAt.toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
  }

  return `בעוד ${daysDifference} ימים בשעה ${timeEventAt.toLocaleTimeString(
    "he-IL",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
  )}`;
};
