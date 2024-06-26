import './App.css'
import { useState, useEffect } from 'react';

import Menu from './assets/Menu.png';
import Trash from './assets/Trash.png';
import MARKDOWN from './assets/MARKDOWN.png';


import SaveButton from './components/buttons/save_button';
import DocumentName from './components/buttons/doc_name';
import Editor from './components/editor';
import Preview from './components/Preview';
import SideBar from './components/sidebar';
import Modal from './components/Modal';




function App() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown')
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [documents, setDocuments] = useState(() => {
    const savedDocs = localStorage.getItem('documents');
    return savedDocs ? JSON.parse(savedDocs) : [{ id: 1, name: 'Welcome.md', date: new Date().toLocaleDateString(), content: '#Markdown Editor' }]
  });
  const [activeDocId, setActiveDocId] = useState(() => {
    const savedActiveDocId = localStorage.getItem('activeDocId')
    return savedActiveDocId ? parseInt(savedActiveDocId) : 1;
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleDocumentChange = (id: number, content: string) => {
    setDocuments((docs: any[]) => {
      const updatedDocs = docs.map((doc: { id: number; }) => (doc.id === id ? { ...doc, content } : doc));
      localStorage.setItem('documents', JSON.stringify(updatedDocs));
      return updatedDocs;
    });
    if (id === activeDocId) {
      setMarkdown(content);
    }
  };

  const handleDocumentRename = (id: number, name: string) => {
    setDocuments((docs: any[]) => {
      const updatedDocs = docs.map((doc: { id: number; }) => (doc.id === id ? { ...doc, name } : doc));
      localStorage.setItem('documents', JSON.stringify(updatedDocs));
      return updatedDocs;
    });
  };

  const handleNewDocument = () => {
    const newDoc = {
      id: documents.length + 1,
      name: `Document ${documents.length + 1}`,
      date: new Date().toLocaleDateString(),
      content: ''
    };
    const updatedDocs = [newDoc, ...documents];
    setDocuments(updatedDocs);
    setActiveDocId(newDoc.id)
    setMarkdown(newDoc.content)
    localStorage.setItem('documents', JSON.stringify(updatedDocs));
    localStorage.setItem('activeDocId', newDoc.id.toString());
  };

  const handleSave = () => {
    handleDocumentChange(activeDocId, markdown)
  }

  const handleDelete = () => {
    const updatedDocuments = documents.filter((doc: { id: number; }) => doc.id !== activeDocId);
    setDocuments(updatedDocuments);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    if (updatedDocuments.length > 0) {
      const nextActiveDoc = updatedDocuments[0];
      setActiveDocId(nextActiveDoc.id);
      setMarkdown(nextActiveDoc.content);
      localStorage.setItem('activeDocId', nextActiveDoc.id.toString());
    } else {
      setActiveDocId(0);
      setMarkdown('');
      localStorage.removeItem('activeDocId');
    }
    setIsModalOpen(false);
  };
  const openDeleteModal = () => {
    setIsModalOpen(true);
  }

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const activeDoc = documents.find((doc: { id: number; }) => doc.id === activeDocId);
    if (activeDoc) {
      setMarkdown(activeDoc.content);
    }
  }, [activeDocId, documents]);

  return (
    <div className={`min-h-screen flex  ${isSideBarOpen ? 'ml-64' : ""}`}>
      {isSideBarOpen &&
        <SideBar
          onClose={handleSideBarToggle}
          documents={documents}
          onNewDocument={handleNewDocument}
          onDocumentClick={(id) => {
            setActiveDocId(id);
            localStorage.setItem('activeDocId', id.toString());
          }}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />}
      <div className='flex flex-grow flex-col'>
        <nav className='flex fixed z-20 top-0 left-0 right-0 items-center justify-between border border-[#2B2D31] bg-[#2B2D31] rounded-none  w-full h-14 md:h-[72px]'>
          <div className='flex items-center gap-2 md:gap-4  '>
            {!isSideBarOpen && <div className='flex  border border-[#35393F] w-14 md:w-[72px] h-14 md:h-[72px] bg-[#35393F] hover:bg-[#E46643]'>
              <img src={Menu}
                alt=''
                className='absolute top-5 md:top-6 left-4 md:left-5 w-6  md:w-7 h-4 cursor-pointer '
                onClick={handleSideBarToggle}
              />
            </div>}
            <img src={MARKDOWN} alt='' className={`hidden md:block md:w-32 md:h-3  ${isSideBarOpen ? 'shifted-markdown' : 'normal'}`}  />
             <div className={`${isSideBarOpen ? 'shifted-docname' : 'normal'}`}>
            <DocumentName  name={documents.find((doc: { id: number; }) => doc.id === activeDocId)?.name || ''}
              onRename={(name) => handleDocumentRename(activeDocId, name)}
            />
            </div> 
          </div>
          <div className='flex items-center  gap-2 md:gap-4 md:mr-3'>
            <img onClick={openDeleteModal}
              src={Trash}
              alt=''
              className=' w-4 h-5 cursor-pointer' />
            <SaveButton onSave={handleSave} />
          </div>
        </nav>


        <div className='flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-14 md:mt-[72px]'>

          <Editor isDarkMode={isDarkMode} markdown={markdown} setMarkdown={(content) => handleDocumentChange(activeDocId, content)} />
          <Preview isDarkMode={isDarkMode} markdown={markdown} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title='Delete this document?'
          content={`Are you sure you want to delete<br/> "${documents.find((doc: { id: number; }) => doc.id === activeDocId)?.name}" document and its content?<br/> This action cannot be reversed`}
          onConfirm={handleDelete}
          onCancel={closeDeleteModal}
          isDarkMode={isDarkMode}
        />
      )

      }
    </div>
  )
}

export default App
