export type task = {
  id: string;
  title: string;
  isDone: boolean;
  dateAdd: Date;
  dateModify?: Date;
};
export type taskCreate = {
  title: string;
};
export type taskModify = {
  id: string;
  isDone?: boolean;
  title?: string;
};
export type taskDelete = {
  id: string;
};
