import React from 'react';
import Folder from './folder';

const FolderList = ({ folders, onFolderClick }) => {
  return (
    <div className="folder-list">
      {folders.map((folder, index) => (
        <Folder key={index} folderName={folder} onClick={onFolderClick} />
      ))}
    </div>
  );
};

export default FolderList;
