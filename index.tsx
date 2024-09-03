import React, { useEffect } from 'react';
import App from './App';
import logo from "./assets/square_dtx.png"

function BPMreflect() {
  useEffect(() => {
    var titleEl = document.querySelector("title") as HTMLTitleElement;
    var iconEl = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    iconEl.setAttribute("href", logo)
    document.querySelector('head')?.insertBefore(iconEl, titleEl);
    titleEl.textContent = "BPM REFLECT";
  })
  return ( 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
  
export default BPMreflect;