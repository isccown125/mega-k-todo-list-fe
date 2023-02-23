export type task = {
  id: string;
  title: string;
  isDone: boolean;
  dateCreate: Date;
  dateUpdate?: Date;
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
