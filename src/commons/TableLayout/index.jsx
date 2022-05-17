import React, { Fragment } from 'react'
import { Table } from 'reactstrap'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'

function TableLayout(props) {
    const { columns, data } = props;

    const defaultColumn = React.useMemo(
      () => ({
        minWidth: 30,
        width: 150,
        maxWidth: 600,
      }),
      []
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      resetResizing,
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useBlockLayout,
      useResizeColumns
    )

    const renderTdItem = (cell, index) => {
      return (
        <div className='td-normal'>{cell.render('Cell')}</div>
      )
    }
  
    return (
          <Table {...getTableProps()}>
            <thead width={100}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} scope="row">
                      {column.render('Header')}
  
                      {column.render('Header') === 'Status' ? (
                        ''
                      ) : (
                        <div
                          {...column.getResizerProps()}
                          className={`resizer ${
                            column.isResizing ? 'isResizing' : ''
                          }`}
                        />
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
  
            <tbody {...getTableBodyProps()}>
                <div className="tbody-container">
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                            return (
                                <td {...cell.getCellProps()}>
                                {renderTdItem(cell, index)}
                                </td>
                            )
                            })}
                        </tr>
                        )
                    })}
                </div>
            </tbody>
          </Table>
    )
  }

export default TableLayout