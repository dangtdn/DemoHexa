import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './style.scss'

function SelectTemplate(props) {

  const {templates} = props;

  const renderItemTemplate = () => {
    return templates.categories[0].templates?.map((item, index) => {
      return (
        <Col key={index} className="my-4">
          <div
            className="item"
            onClick={() => {
              props.setTemplate(item);
            }}
          >
            <div className="item-title">{item.name}</div>
            <div className="item-content">
              {item.description}
            </div>
          </div>
        </Col>
      )
    })
  }

  const renderTitleTemplate = () => {
    return templates.categories?.map((item, index) => {
      return (
        <li
        key={index}
          className="md-nav-item active"
          id="nav-ws-1"
          // onClick={() => {
          //   addActive("nav-ws-1");
          // }}
        >
          <a className="nav-link d-flex align-items-center h-100">
            {item.category}
          </a>
        </li>
      )
    })
  }

  return (
    <div className="template">
      <div className="title">Select a Template</div>
      <div className="template-main">
        <div className="md-tabs-wrapper">
          <div className="md-tabs-menu">
            <ul className="navbar-list d-flex justify-content-left align-items-center">
              {renderTitleTemplate()}
              <span className="md-nav-indicator"></span>
            </ul>
          </div>
        </div>
        <div className="template-content">
          <Container>
            <Row md="8">
              {renderItemTemplate()}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SelectTemplate