export interface TaskboardItem {
  id: string;
  title: string;
  description: string;
}

export enum TaskboardItemStatus {
  TO_DO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}
