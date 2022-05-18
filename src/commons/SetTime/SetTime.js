import React from 'react'
import { useEffect } from 'react';
import { detect } from 'detect-browser';


export const setTimeOutLogOut = (load, setLoad) => {
    console.log("Waiting reset local storage");
    
    // setTimeout(() => {
    //     localStorage.clear();
    //     setLoad(!load);
        // console.log("Vui lòng đăng nhập lại");
    // }, 24 * 60 * 60 * 1000); 
};

export const setTimeCheckDevice = (setTypeDevice) => {
    
    setInterval(() => {
        setTypeDevice(detect(navigator.userAgent).name);
        console.log("Checked device");
    }, 10000); 
};

