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
  const [markdown, setMarkdown] = useState('#Welcome to Markdown')
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [documents, setDocuments] = useState([{ id: 1, name: 'Welcome.md', content: '#Markdown Editor' }]);
  const [activeDocId, setActiveDocId] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleDocumentChange = (id: number, content: string) => {
    setDocuments(docs => docs.map(doc => (doc.id === id ? { ...doc, content } : doc)));
    if (id === activeDocId) {
      setMarkdown(content);
    }
  };

  const handleDocumentRename = (id: number, name: string) => {
    setDocuments(docs => docs.map(doc => (doc.id === id ? { ...doc, name } : doc)))
  };

  const handleNewDocument = () => {
    const newDoc = {
      id: documents.length + 1,
      name: `Document ${documents.length + 1}`,
      content: ''
    };
    setDocuments([...documents, newDoc]);
    setActiveDocId(newDoc.id)
    setMarkdown(newDoc.content)
  };

  const handleSave = () => {
    handleDocumentChange(activeDocId, markdown)
  }

  const handleDelete = () => {
    const updatedDocuments = documents.filter(doc => doc.id !== activeDocId);
    setDocuments(updatedDocuments);
    if (updatedDocuments.length > 0) {
      const nextActiveDoc = updatedDocuments[0];
      setActiveDocId(nextActiveDoc.id);
      setMarkdown(nextActiveDoc.content);

    } else {
      setActiveDocId(0);
      setMarkdown('');
    }
    setIsModalOpen(false);
  }

  const openDeleteModal = () => {
    setIsModalOpen(true);
  }

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex  ${isSideBarOpen ? 'ml-64' : ""}`}>
      {isSideBarOpen &&
        <SideBar
          onClose={handleSideBarToggle}
          documents={documents}
          onNewDocument={handleNewDocument}
          onDocumentClick={(id) => {
            setActiveDocId(id);
            setMarkdown(documents.find(doc => doc.id === id)?.content || '');
          }}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />}
      <div className='flex flex-grow flex-col'>
        <nav className='flex items-center justify-between border border-[#2B2D31] bg-[#2B2D31] rounded-none  w-full h-14 md:h-[72px]'>
          <div className='flex items-center gap-2 md:gap-4  md:ml-3'>
            <div className='flex  border border-[#2B2D31] w-14 md:w-[72px] h-14 md:h-[72px] bg-[#2B2D31] hover:bg-[#E46643]'>
              {!isSideBarOpen && <img src={Menu}
                alt=''
                className='absolute top-5 md:top-6 left-4 md:left-8 w-6  md:w-7 h-4 cursor-pointer '
                onClick={handleSideBarToggle}
              />}
            </div>
            <img src={MARKDOWN} alt='' className='hidden md:block md:w-32 md:h-3 ' />

            <DocumentName name={documents.find(doc => doc.id === activeDocId)?.name || ''}
              onRename={(name) => handleDocumentRename(activeDocId, name)}
            />

          </div>
          <div className='flex items-center  gap-2 md:gap-4 md:mr-3'>
            <img onClick={openDeleteModal}
              src={Trash}
              alt=''
              className=' w-4 h-5 cursor-pointer' />
            <SaveButton onSave={handleSave} />
          </div>
        </nav>


        <div className='flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden'>

          <Editor isDarkMode={isDarkMode} markdown={markdown} setMarkdown={(content) => handleDocumentChange(activeDocId, content)} />
          <Preview isDarkMode={isDarkMode} markdown={markdown} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title='Delete this document?'
          content={`Are you sure you want to delete<br/> "${documents.find(doc => doc.id === activeDocId)?.name}" document and its content?<br/> This action cannot be reversed`}
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
