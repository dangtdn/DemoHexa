import React, { useMemo } from 'react'
import { Table } from 'reactstrap'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import TableLayout from '../../../commons/TableLayout';

function Template3(props) {
  const {template} = props;

  const columns = [
      {
        Header: '未読',
        accessor: 'unread',
        // width: 100,
      },
      {
        Header: 'タイトル',
        accessor: 'title',
        // width: 250,
      },
      {
        Header: 'カテゴリ',
        accessor: 'type',
        // width: 250,
      },
      {
        Header: '担当',
        accessor: 'user',
        // width: 250,
      },
      {
        Header: 'ステータス',
        accessor: 'status',
        // width: 250,
      },
      {
        Header: '期限',
        accessor: 'date',
        // width: 250,
      },
    ];

  const data = [
    {
      unread: '',
      title: 'タスクE',
      type: 'A',
      user: 'X',
      status: '完了',
      date: '2020/04/04'
    },
    {
      unread: '',
      title: 'タスクC',
      type: 'C',
      user: 'Y',
      status: '完了',
      date: '2020/04/02'
    },
    {
      unread: '',
      title: 'タスクB',
      type: 'A',
      user: 'X',
      status: '完了',
      date: '2020/04/01'
    },
    {
      unread: '',
      title: 'タスクD',
      type: 'B',
      user: 'X',
      status: '完了',
      date: '2020/04/03'
    },
    {
      unread: '',
      title: 'タスクB',
      type: 'B',
      user: 'Y',
      status: '完了',
      date: '2020/04/31'
    },
  ]

  return (
    <div className="item-contents">
      <div className="item-list-view">
        <div className="item-header d-flex justify-content-between align-items-end">
          <div className="data-filter d-flex justify-content-left">
            <div className="data-filter-group d-flex justify-content-left align-items-center">
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
            <div className="register">新規登録</div>
            <div className="download">
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
            </div>
          </div>
        </div>
        <div className="item-datastore">
          <TableLayout columns={columns} data={data}  template={template}/>
        </div>
      </div>
    </div>
  );
}

export default Template3