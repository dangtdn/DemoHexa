import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { importData } from '../../../redux/actions/DatastoresAction';

function FormImportDS() {
    const [file, setFile] = useState();
    const [name, setName] = useState('');
  
    useEffect(() => {
      if (file) {
        handleUploadFile();
      }
    },[file]);
  
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
      console.log('file: ',e.target.files[0])
    };

    const handleUploadFile = async () => {
      setName(file.name);
      const formData = new FormData();
      const project_id = localStorage.getItem("project_id");
      const data = {
        "application_id": project_id,
        "filename": file.name,
        "is_external_service": false,
        "data_source": "FILE"  
      };
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      formData.append(
        'file',
        file,
        file.name
      );
      const response = await importData(formData);
      localStorage.setItem("collection_id", response.collection_id);
    }

  return (
    <form>
      <div className="ds-imp-upload">
        <div className="ds-imp-upload-container">
          <div className="content">
            {file ? (
              <div>
                <span className="size-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,15V11H10V15H12.3C12.6,17 12,18 9.7,19.38L10.85,20.2C13,19 14,16 14,15Z"></path>
                  </svg>
                </span>
                <span>{file.name}</span>
              </div>
            ) : (
              <span>Drop CSV file here, or Click to Upload</span>
            )}
            {/* <span>Drop CSV file here, or Click to Upload</span> */}
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
        <button className="button btn-cancel">
          <span>Cancel</span>
        </button>
        <button className="button btn-action-chart">
          <Link
            to={`/w/${localStorage.getItem(
              "workspace_id"
            )}/pj/${localStorage.getItem(
              "project_id"
            )}/data_preview/${localStorage.getItem("collection_id")}/2`}
          >
            Next
          </Link>
        </button>
      </div>
      <div
        className="main-table"
        style={{
          maxHeight: "200px",
          width: "100%",
          overlowY: "auto",
        }}
      ></div>
    </form>
  );
}

export default FormImportDS