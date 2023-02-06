import { task } from "../types";

export const getFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
};
export const getFullTime = (
  datetime: Date,
  options: { withSeconds: boolean }
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

export const getAllYearsFromArr = (arr: task[]) => {
  const dates = arr.map((el) => {
    return new Date(el.dateAdd).getFullYear().toString();
  });
  let lastEl = "";
  if (dates) {
    const newArr = dates.sort();
    const filteredArr = newArr.filter((el: string) => {
      if (el !== lastEl) {
        lastEl = el;
        return el;
      }
      return undefined;
    });
    return filteredArr;
  }
};

export const getAllDatesFromArr = (
  arr: task[],
  options: { byYear?: string }
) => {
  const dates = arr.map((el) => {
    return getFullDate(new Date(el.dateAdd));
  });

  if (options.byYear) {
    let lastEl = "";
    const newArr = dates.sort();
    const filteredArr = newArr.filter((el) => {
      const year = new Date(el).getFullYear().toString();
      if (year === options.byYear && el !== lastEl) {
        lastEl = el;
        return el;
      }
      return undefined;
    });
    return filteredArr;
  }
  if (dates) {
    let lastEl = "";
    const newArr = dates.sort();
    const filteredArr = newArr.filter((el: string) => {
      if (el !== lastEl) {
        lastEl = el;
        return el;
      }
      return undefined;
    });
    return filteredArr;
  }
};
