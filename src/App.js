import React, { useState } from 'react';
import FolderList from './components/folderlist';
import CreateFolder from './components/createdocument';
import DocumentList from './components/documentlist';
import CreateDocument from './components/folder';
import DocumentEditor from './components/documenteditor';
import './style.css';
const App = () => {
  const [folders, setFolders] = useState(['Folder 1', 'Folder 2']);
  const [documents, setDocuments] = useState({
    'Folder 1': ['Doc 1', 'Doc 2'],
    'Folder 2': ['Doc 3', 'Doc 4'],
  });
  const [currentFolder, setCurrentFolder] = useState('Folder 1');
  const [currentDoc, setCurrentDoc] = useState(null);

  const handleFolderClick = (folderName) => {
    setCurrentFolder(folderName);
    setCurrentDoc(null);
  };

  const handleCreateFolder = (folderName) => {
    setFolders([...folders, folderName]);
    setDocuments({ ...documents, [folderName]: [] });
  };

  const handleCreateDocument = (docName) => {
    const updatedDocs = { ...documents, [currentFolder]: [...documents[currentFolder], docName] };
    setDocuments(updatedDocs);
  };

  const handleDocClick = (docName) => {
    setCurrentDoc(docName);
  };

  const handleSaveDocument = (docName, content) => {
    console.log(`Document saved: ${docName}, Content: ${content}`);
  };

  return (
    <div className="app">
      <div className='container mx-auto px-4'>
      <CreateFolder onCreate={handleCreateFolder} />
      <FolderList folders={folders} onFolderClick={handleFolderClick} />
      <DocumentList documents={documents[currentFolder]} onDocClick={handleDocClick} />
      <CreateDocument onCreate={handleCreateDocument} />
      {currentDoc && (
        <DocumentEditor documentName={currentDoc} onSave={handleSaveDocument} />
      )}
      
 
    </div>
    </div>
    
  );
};

export default App;
