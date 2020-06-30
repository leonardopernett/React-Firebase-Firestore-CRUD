import React from "react";

export default function RowLink(props) {
  return (
    <>
      <div className="card m-1">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3> {props.link.name} </h3>
            <a onClick={() => props.deleteLink(props.link.id)}>
              <i className="material-icons text-danger">close</i>
            </a>
          </div>
          <p>{props.link.description}</p>
          <a href={props.link.url} className="d-block" target="_blank">
            Go the site
          </a>
          <button
            className="btn btn-primary"
            onClick={() => props.setCurrentId(props.link.id)}
          >
            edit
          </button>
        </div>
      </div>
    </>
  );
}
