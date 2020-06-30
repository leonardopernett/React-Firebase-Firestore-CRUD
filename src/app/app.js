import React from 'react'
import Link from './components/Link';
import {ToastContainer} from 'react-toastify'
export default function app() {

  return (
      <div className="container">
        <Link />
        <ToastContainer />
      </div>
  );
}
