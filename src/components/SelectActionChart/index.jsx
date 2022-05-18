import React from 'react'
import { FormGroup, Label } from 'reactstrap';
import './style.scss'

function SelectActionChart(props) {

  const handleSelect = () => {
    const dropdown = document.querySelector(".dropdown-options");
    dropdown.classList.toggle("open");
  };

  const clickOption = (text, id) => {

    const btn = document.querySelector(".btn-select__language");
    const dropdown = document.querySelector(".dropdown-options");

    dropdown.classList.remove("open");
    btn.innerHTML = text;
    let activeLink = document.querySelector(".option .active");

    if (activeLink) {
      activeLink.classList.remove("active");
    }

    if (id) document.querySelector(`#${id}`).classList.add("active");
  };

  return (
    <div className="select-container">
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          Select a Report
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          Type *
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          X Axis *
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          Y Axis *
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          Series *
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    <FormGroup className='mb-5'>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          Color Palette
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("Test", "eng");
              }}
            >
              Test
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
    </div>
  );
}

export default SelectActionChart