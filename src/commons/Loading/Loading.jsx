import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './Loading.scss'

function Loading() {

    const isLoading = useSelector(state => state.LoadingReducer.loading);

    const renderLoading = () => {
        if(isLoading) 
        return (
          <div id="loadingPage">
            <div className="loading__layout">
              <div className="loading__content">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="loading__text mt-4">
                ワークスペースを初期化しています..
              </p>
            </div>
          </div>
        );
    }

    return (
        <Fragment>
            {renderLoading()}
        </Fragment>
    )
}

export default Loading;