export const getFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  return `${year}-${month}-${day}`;
};
export const getFullTime = (
  datetime: Date,
  options: { withSeconds?: boolean }
) => {
  const hours =
    datetime.getHours() < 10 ? `0${datetime.getHours()}` : datetime.getHours();
  const minutes =
    datetime.getMinutes() < 10
      ? `0${datetime.getMinutes()}`
      : datetime.getMinutes();
  const seconds =
    datetime.getSeconds() < 10
      ? `0${datetime.getSeconds()}`
      : datetime.getSeconds();

  if (options.withSeconds) {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}`;
};
