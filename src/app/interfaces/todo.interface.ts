export interface Todo {
  id?: number;
  title: string;
  description: string;
  status?: 'complete' | 'incomplete' | 'in-progress';
}
