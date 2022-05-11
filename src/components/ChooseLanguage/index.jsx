import React, { useEffect } from 'react'
import { FormGroup, Label } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import './style.scss'

function ChooseLanguage() {

    const { t, i18n } = useTranslation();
    // const select = localStorage.getItem('i18nextLng');

    const handleSelect = () => {
      const dropdown = document.querySelector(".dropdown-options");
      dropdown.classList.toggle("open");
    };

    const clickOption = (text, id) => {

      i18n.changeLanguage(id);

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
    <FormGroup>
      <Label className='label__language'>
      {t('content.choose__language')}
      </Label>
      <div className="dropdown">
        <button
          type='button'
          className="btn-select__language"
          onClick={() => {
            handleSelect();
          }}
        >
          English
        </button>
        <ul className="dropdown-options">
          <li className="option">
            <a
              id="eng"
              onClick={() => {
                clickOption("English", "eng");
              }}
            >
              English
            </a>
          </li>
          <li className="option">
            <a
              id="vn"
              onClick={() => {
                clickOption("日本語", "jp");
              }}
            >
              日本語
            </a>
          </li>
        </ul>
      </div>
    </FormGroup>
  )
}

export default ChooseLanguage