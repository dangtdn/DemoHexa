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

    const filterTable = (input_id, number) => {
      
      const input = document.getElementById(input_id);
      const filter = input.value.toUpperCase();
     
      const table = document.querySelector(".ds-table");
      const tr = table.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[number];
        if (td) {
          const txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
  
    return (
          <Table className='ds-table' {...getTableProps()}>
            <thead width={100}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th {...column.getHeaderProps()} scope="row">
                      <div className="group-th">
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
                      <input 
                      type="text" 
                      id={`input${index}`}
                      onKeyUp={() => filterTable(`input${index}`, index)}
                      />
                      </div>
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