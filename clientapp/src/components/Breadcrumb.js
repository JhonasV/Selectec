import React from "react";

// components
import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs }) => {
  const renderBreadcrumbs = (crumbs) => {
    return crumbs.map((crumb, key) => {
      return (
        <li
          key={key}
          className={`breadcrumb-item ${crumb.path === null ? "active" : null}`}
        >
          {crumb.path !== null ? (
            <Link to={crumb.path}>{crumb.page}</Link>
          ) : (
            crumb.page
          )}
        </li>
      );
    });
  };

  return (
    <>
      <ol className="breadcrumb">
        {/* <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active">Information</li> */}
        {renderBreadcrumbs(crumbs)}
      </ol>
    </>
  );
};

export default Breadcrumb;
