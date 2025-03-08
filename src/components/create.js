import React, { useState } from 'react';

const CreateFolder = ({ onCreate }) => {
  const [folderName, setFolderName] = useState('');

  const handleCreate = () => {
    if (folderName) {
      onCreate(folderName);
      setFolderName('');
    }
  };

  return (
    <div className="create-folder">
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Enter folder name"
      />
      <button onClick={handleCreate} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Folder</button>
    </div>
  );
};

export default CreateFolder;
