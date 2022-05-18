import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { Table } from 'reactstrap'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import { useSelector } from 'react-redux'
import TableLayout from '../../../commons/TableLayout';

function Template5(props) {
  const {titleReport} = props;

  const {tables} = useSelector(state => state.DataReportReducer);

  const [data, setData] = useState([]); 
  const [dataCSV, setDataCSV] = useState([]); 
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    let columns = [];
    if(tables.report_fields) {
      tables.report_fields.forEach(item => {
        columns.push({
          Header: item.title,
          accessor: item.rpf_id,
          // width: 55
        })
      });
      // setData(tables.items);
      setColumns(columns);
    }
    console.log('col: ',columns)
  }, [tables]);

  useEffect(() => {
    if (columns.length > 0) {
      let arr = [];
      tables.report_results.forEach(i => {
        let values = {}
        for (let [key, value] of Object.entries(i)) {
          columns.forEach(j => {
            if (key === j.accessor) {
              values = {
                ...values,
                [key]: value
              }
            }
          })
        }
        arr.push(values);
      })
      setData(arr);
    }
  }, [columns]);

  useEffect(() => {
    if (columns.length > 0 && data.length > 0) {
      let arr = [];
      data.forEach(item => {
        let values = {}
        for (let [key, value] of Object.entries(item)) {
          columns.forEach(j => {
            if (key === j.accessor) {
              values = {
                ...values,
                [j.Header]: value
              }
              // console.log(values)
            }
          })
        }
        arr.push(values);
      })
      setDataCSV(arr);
    }
  }, [columns, data]);

  const convertArrayOfObjectsToCSV = args => {  
    const data = args.data;
    if (!data || !data.length) return;
  
    const columnDelimiter = args.columnDelimiter || ',';
    const lineDelimiter = args.lineDelimiter || '\n';
  
    const keys = Object.keys(data[0]);
  
    let result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
  
    data.forEach(item => {
      let ctr = 0;
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    
    return result;
  }

  const downloadCSV = (args) => {
    let csv = convertArrayOfObjectsToCSV({
      data: dataCSV
    });
    if (!csv) return;
  
    const filename = args.filename || 'export.csv';
  
    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
  
    const data = encodeURI(csv);
    console.log(data)
  
    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
  
  

  return (
    <Fragment>
      <div className="header-items-menu d-flex justify-content-between align-items-center">
        <div className="title d-flex align-items-center">
          <span>
            <i className="fa-solid fa-database"></i>
          </span>
          <p>{titleReport}</p>
        </div>
        <div className="download-csv">
          <a
            className="download d-flex justify-content-center align-items-center"
            onClick={() => {downloadCSV({ filename: "DataCSV.csv" })}}
          >
            <span className="size-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fit=""
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <g id="download_cache3098">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"></path>
                </g>
              </svg>
            </span>
            <span className="text">CSV DOWNLOAD</span>
          </a>
        </div>
      </div>
      <div className="item-contents">
        <div className="item-list-view">
          <div className="item-header d-flex justify-content-end align-items-center">
            <div className="pagination">
              <span className="pagination-item size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <g id="chevron-double-left_cache5713">
                    <path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"></path>
                  </g>
                </svg>
              </span>
              <span className="pagination-item size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <g id="chevron-left_cache5714">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                  </g>
                </svg>
              </span>
              <span style={{lineHeight: '1.7'}}>1/1</span>
              <span className="pagination-item size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <g id="chevron-right_cache5715">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                  </g>
                </svg>
              </span>
              <span className="pagination-item size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <g id="chevron-double-right_cache5716">
                    <path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="item-datareport">
            <TableLayout columns={columns} data={data}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Template5