import React from 'react';

const Document = ({ docName, onClick }) => {
  return (
    <div className="document" onClick={() => onClick(docName)}>
      <h3>{docName}</h3>
    </div>
  );
};

export default Document;
