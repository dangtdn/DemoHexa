import React, { useEffect, useMemo, useState } from 'react'
import { Table } from 'reactstrap'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import { useSelector } from 'react-redux'
import TableLayout from '../../../commons/TableLayout';

function Template2(props) {

  const {tables} = useSelector(state => state.DatastoresReducer);

  const [data, setData] = useState([]); 
  const [dataDel, setDataDel] = useState([]); 
  const [dataCSV, setDataCSV] = useState([]); 
  const [columns, setColumns] = useState([]);
  const [columnsDel, setColumnsDel] = useState([]);
  const [selectField, setSelectField] = useState([]);
  const [datastore, setDatastore] = useState([]);

  useEffect(() => {
    if (Object.keys(tables).length > 0) {
      const temp = [];
      tables.fields.forEach((item, index) => {
        temp.push({
          ...item,
          isShow: true,
        });
      }) 
      setSelectField(temp);
      setDatastore(tables.items);
    }
  }, [tables]);

  useEffect(() => {
    const array = [
      {
        Header: 'Unread',
        accessor: 'Unread',
      },
    ];
    selectField.forEach(item => {
      if (item.isShow) {
        const res = {
          Header: item.displayName,
          accessor: item.field,
        };
        array.push(res);
      }
    }) 
    setColumns(array);
  }, [selectField, datastore]);

  useEffect(() => {
    if (selectField.length > 0 && datastore.length > 0) {
      const value = [];
      datastore.forEach(item => {
        let res = {};
        selectField.forEach(itemField => {
          const field_id = itemField.field;
          res = { ...res, [field_id]: item[field_id] };
        }) 
        value.push(res);
      }) 
      setData(value);
    }
  }, [selectField, datastore]);

  const handleShowColumns = (columns_id, class_id) => {
    let newValue = [...selectField];
    const index = newValue.findIndex((item) => item.field === columns_id);
    let [dataChange] = newValue.filter((item) => item.field === columns_id);
    dataChange = {
      ...dataChange,
      isShow: !dataChange.isShow,
    };
    newValue = [...newValue.slice(0, index), dataChange, ...newValue.slice(index + 1)];
    setSelectField(newValue);

    document.querySelector(`#${class_id} .icon-check`).classList.toggle('d-none');
    document.querySelector(`#${class_id} .icon-cancel`).classList.toggle('d-none');
  };

  const handleShowMenu = () => {
    document.querySelector(".list-menu-select").classList.toggle("collapse-menu");
  };

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
  
  const handleShowNewItem = () => {
    if (document.querySelector('.md-sidenave-backdrop') && document.querySelector('.md-sidenave-right'))
        document.querySelector('.md-sidenave-backdrop').classList.add('active');
        document.querySelector('.md-sidenave-right').classList.add('active');
  }

  return (
    <div className="item-contents">
      <div className="item-list-view">
        <div className="item-header d-flex justify-content-between align-items-end">
        <div className="data-filter d-flex justify-content-left">
            <div className="data-filter-group d-flex justify-content-left align-items-center"
            onClick={() => props.showModalForm()}
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
                  <g id="table_cache3095">
                    <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"></path>
                  </g>
                </svg>
              </span>
              <input type="text" placeholder="Data Filter" />
            </div>
            <button className="save">
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
                  <g id="content-save_cache3096">
                    <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          <div className="actions d-flex justify-content-center align-items-center">
            <div className="register"
            onClick={() => {handleShowNewItem()}}
            >New</div>
            <a className="download"
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
            </a>
          </div>
        </div>
        <div className="item-datastore">
          <TableLayout columns={columns} data={data}/>
          <div className="menu-select-container">
            <div className="menu-select"
            onClick={() => {handleShowMenu()}}
            >
                <span><i className="fa fa-bars"></i></span>
            </div>
            <div className='list-menu-select'>
                <ul className='list-details'>
                  <li className="item">
                    <button className='btn-item'><span>Edit List Layout</span></button>
                  </li>
                  <li className="item">
                    <button className='btn-item'><span>Toggle Filtering</span></button>
                  </li>
                  <li className="item">
                    <span className='text-item d-inline-block'><span>Columns:</span></span>
                  </li>
                  <li className="item">
                    <button className='btn-item'>
                      <span className='icon-check'><i className="fa fa-check"></i></span>
                      <span className='icon-cancel d-none'><i class="fa fa-times"></i></span>
                      <span>Unread</span>
                    </button>
                  </li>
                  {selectField.length > 0 ? 
                    selectField.map(item => {
                      return (
                        <li 
                        key={item.field}
                        id={`idx${item.field}`}
                        className="item"
                        onClick={() => {handleShowColumns(item.field, `idx${item.field}`)}}
                        >
                          <button className='btn-item'>
                          <span className='icon-check'><i className="fa fa-check"></i></span>
                          <span className='icon-cancel d-none'><i class="fa fa-times"></i></span>
                            <span>{item.displayName}</span>
                          </button>
                        </li>
                      )
                    }) :
                  ''
                  }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2