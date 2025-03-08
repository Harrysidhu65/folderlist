import React, { useState } from 'react';

const CreateDocument = ({ onCreate }) => {
  const [docName, setDocName] = useState('');

  const handleCreate = () => {
    if (docName) {
      onCreate(docName);
      setDocName('');
    }
  };

  return (
    <div className="create-document m-4">
      <input
        type="text"
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
        placeholder="Enter document name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <button onClick={handleCreate} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Document</button>
    </div>
  );
};

export default CreateDocument;
