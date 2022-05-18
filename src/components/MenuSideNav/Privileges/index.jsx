import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGroupTree } from '../../../redux/actions/GroupAction';
import { getWorkspace } from '../../../redux/actions/WorkspaceAction';

import './style.scss'

function Privileges() {

    const {arrGroup} = useSelector(state => state.GroupReducer);
    const {userInfo} = useSelector(state => state.UserReducer);

    const renderListGroup = () => {
        
        return arrGroup?.map((item, index) => {
            
            return (
                <div className="item" key={index}><span><i className="fa fa-user-friends"></i></span> {item.name}</div>
            )
        })
    }

    const renderListChildGroup = () => {
        let arrChild = [];
        
        arrGroup?.forEach((item) => {
            if (item.childGroups.length > 0) {
                item.childGroups.forEach(item => {
                    arrChild = [...arrChild, item];
                })
            }
        })

        return arrChild?.map((item, index) => {
            index += arrGroup.length; 
            return (
                <div className="item" key={index}><span><i className="fa fa-user-friends"></i></span> {item.name}</div>
            )
        })
    }

  return (
    <div className='accesskey-container p-3'>
        <div className="accesskey">
            <div className="accesskey-list">
                <div className="list-top">
                    <div className="title">My Access Key</div>
                    <div className="list-top__my-accesskey">
                        <div className="item"><span><i className="fa fa-user-alt"></i></span> {userInfo.username}</div>
                    </div>
                </div>
                <div className="list-bottom">
                    <div className="title">Group Access Keys</div>
                    <div className="list-bottom__group-accesskey">
                        {renderListGroup()}
                        {renderListChildGroup()}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Privileges