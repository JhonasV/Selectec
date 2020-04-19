import React from "react";

const Alert = ({ type, message }) => {
  const renderAlert = () => {
    if (message.length > 0) {
      return (
        <div
          className={`alert alert-dismissible m-auto alert-${type}`}
          style={{ maxWidth: "75%" }}
        >
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Oh snap!</strong> {message}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return renderAlert();
};

export default Alert;
