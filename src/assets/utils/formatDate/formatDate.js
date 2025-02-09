export const formatDate = (dateString, formatType = "date") => {
  const date = new Date(dateString);

  // Format and return ex: "Monday 1"
  if (formatType === "date") {
    const options = { weekday: "long", day: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  // Format and return just time in AM/PM
  if (formatType === "time") {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Add 0 if minutes < 10
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12; // Format to 12hs format
    hours = hours ? hours : 12; // Show 0 like 12
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  // return empty string if its invalid date
  return "";
};
