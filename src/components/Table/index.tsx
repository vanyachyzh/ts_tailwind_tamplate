import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

import { ITableColumn, ITableRow } from './types';

import './style.css';

type Props = {
  tableClassName?: string;
  thClassName?: string;
  tdClassName?: string;
  trClassName?: string;
  columns: ITableColumn[];
  rows: ITableRow[] | null;
  noItemsText: string;
  isLoading: boolean;
  limit: number;
  skeletons: Record<string, ReactNode>;
};

const Table = ({
  tableClassName,
  thClassName,
  tdClassName,
  trClassName,
  columns,
  rows,
  noItemsText,
  isLoading,
  limit,
  skeletons,
}: Props) => {
  return (
    <div className={twMerge('hiddenScrollBar', 'overflow-x-auto')}>
      <table className={twMerge(tableClassName, 'flex flex-col')}>
        <thead>
          <tr className={twMerge(trClassName, 'inline-block min-w-full')}>
            {columns.map(column => (
              <th
                key={column.key}
                className={twMerge(thClassName, 'inline-flex')}
                style={{ width: `${column.percentageWidth}%` }}
              >
                <div className="overflow-hidden truncate">{column.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.length === 0 ? (
            <tr className={twMerge(trClassName, 'inline-block min-w-full')}>
              <td
                className={twMerge(
                  tdClassName,
                  'inline-flex w-full items-center justify-center',
                )}
              >
                {noItemsText}
              </td>
            </tr>
          ) : (
            <>
              {isLoading
                ? Array.from(Array(limit).keys()).map(() => (
                    <tr
                      className={twMerge(
                        trClassName,
                        'inline-block min-w-full',
                      )}
                      key={uuidv4()}
                    >
                      {columns.map(column => (
                        <td
                          key={uuidv4()}
                          className={twMerge(tdClassName, 'inline-flex')}
                          style={{ width: `${column.percentageWidth}%` }}
                        >
                          {skeletons[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))
                : rows?.map(item => (
                    <tr
                      className={twMerge(
                        trClassName,
                        'inline-block min-w-full',
                      )}
                      key={uuidv4()}
                    >
                      {columns.map(column => (
                        <td
                          key={uuidv4()}
                          className={twMerge(tdClassName, 'inline-flex')}
                          style={{ width: `${column.percentageWidth}%` }}
                        >
                          <div className="overflow-hidden truncate">
                            {item.cells[column.key]}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

{/* <Table
  columns={[
    {
      key: 'invoice_number',
      title: 'Invoice Number',
      percentageWidth: 40,
    },
    { key: 'company', title: 'Company', percentageWidth: 20 },
    { key: 'status', title: 'Status', percentageWidth: 20 },
    { key: 'action', title: 'Action', percentageWidth: 20 },
  ]}
  tableClassName="min-w-[50rem]"
  thClassName="h-10 items-center"
  tdClassName="border-t border-black h-10 items-center"
  rows={normalizeInvoices(INVOICES)}
  noItemsText="There are no invoices"
  isLoading={false}
  skeletons={{}}
  limit={20}
/>; */}
