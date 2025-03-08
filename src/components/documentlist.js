import React from 'react';
import Document from './document';

const DocumentList = ({ documents, onDocClick }) => {
  return (
    <div className="document-list">
      {documents.map((doc, index) => (
        <Document key={index} docName={doc} onClick={onDocClick} />
      ))}
    </div>
  );
};

export default DocumentList;
