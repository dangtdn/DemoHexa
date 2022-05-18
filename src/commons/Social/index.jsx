import React from 'react'
import Images from '../../components/constants/images';
import { Row, Col } from 'reactstrap';

import './style.scss'

function Social() {
  return (
    <div className="social">
      <hr />
      <div className="social-title">Associated account</div>
      <hr />
      <div className="social-body">
        <Row md='3'>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center ">
              <div className="link-icon"><img src={Images.FACEBOOK_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Facebook</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.GOOGLE_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Google</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.GITHUB_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Github</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.TWITTER_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Twitter</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.SALESFORCE_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Salesforce</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.MICROSOFT_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Microsoft</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className='mb-5'>
            <div className="social-link d-flex justify-content-around align-items-center">
              <div className="link-icon"><img src={Images.LINE_ICON} alt="" /></div>
              <div className="link-body d-flex">
                <span className='link-type'>Line</span>
                <div className='link'>
                  <button className='btn-social-link'>Link</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Social