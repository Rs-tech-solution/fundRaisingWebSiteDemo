export function formatDate(dateString, format = "DD MMM YYYY") {
  const date = new Date(dateString);

  if (isNaN(date)) return "Invalid Date";

  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthsLong = [
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

  const map = {
    DD: String(date.getDate()).padStart(2, "0"),
    D: date.getDate(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: date.getMonth() + 1,
    MMM: monthsShort[date.getMonth()],
    MMMM: monthsLong[date.getMonth()],
    YY: String(date.getFullYear()).slice(-2),
    YYYY: date.getFullYear(),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  return format.replace(
    /DD|D|MM|M|MMMM|MMM|YYYY|YY|HH|mm|ss/g,
    (match) => map[match]
  );
}
