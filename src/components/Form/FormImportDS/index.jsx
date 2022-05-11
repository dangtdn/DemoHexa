import React, { useState } from 'react'

function FormImportDS() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
  
    const fileReader = new FileReader();
  
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
      console.log('file: ',e.target.files[0])
    };
  
    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
  
      const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
        return obj;
      });
  
      setArray(array);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(file);
      }
    };
  
    const headerKeys = Object.keys(Object.assign({}, ...array));

    const renderTable = () => {
        return (
            <table>
                <thead>
                <tr key={"header"}>
                    {headerKeys.map((key) => (
                    <th>{key}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {array.map((item) => (
                    <tr key={item.id}>
                    {Object.values(item).map((val) => (
                        <td>{val}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }

  return (
    <form>
      <div className="ds-imp-upload">
        <div className="ds-imp-upload-container">
          <div className="content">
            <span>Drop CSV file here, or Click to Upload</span>
          </div>
          <input 
          type="file"
          id="csvFileInput"
          accept=".csv"
          onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="btn-back-next d-flex justify-content-around align-items-center">
        <button className="button btn-cancel"><span>Cancel</span></button>
        <button className="button btn-action-chart"
        onClick={(e) => {handleOnSubmit(e)}}
        ><span>Next</span></button>
      </div>
      <div className="main-table"
      style={{
          maxHeight: '200px',
          width: '100%',
          overlowY: 'auto'
      }}
      >
        {renderTable()}
      </div>
    </form>
  )
}

export default FormImportDS