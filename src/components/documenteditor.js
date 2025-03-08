import React, { useState } from 'react';

const DocumentEditor = ({ documentName, onSave }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(documentName, content);
  };

  return (
    <div className="document-editor">
      <h2>Editing: {documentName}</h2>
      <textarea className='w-fullbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your document..."
      />
      <button onClick={handleSave} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save Document</button>
    </div>
  );
};

export default DocumentEditor;
