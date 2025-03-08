import React from 'react';

const Folder = ({ folderName, onClick }) => {
  return (
    <div className="folder" onClick={() => onClick(folderName)}>
      <h3>{folderName}</h3>
    </div>
  );
};

export default Folder;
