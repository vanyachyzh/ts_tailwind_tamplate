import { ReactNode } from 'react';

export interface ITableRow {
  cells: Record<string, string | ReactNode>;
}

export interface ITableColumn {
  key: string;
  title: string;
  percentageWidth: number;
}
