import './App.css'
import { useState } from 'react';

import Menu from './assets/Menu.png';
import Trash from './assets/Trash.png';
import MARKDOWN from './assets/MARKDOWN.png';

import SaveButton from './components/buttons/save_button';
import DocumentName from './components/buttons/doc_name';
import Editor from './components/editor';
import Preview from './components/Preview';
import SideBar from './components/sidebar';




function App() {
  const [markdown, setMarkdown] = useState('#Markdown Editor')
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [documents, setDocuments] = useState([{ id:1, name: 'Document 1', content: '#Markdown Editor'}]);
  const [activeDocId, setActiveDocId] = useState(1);

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleDocumentChange = (id: number, content: string) => {
    setDocuments(docs => docs.map(doc => (doc.id === id ? { ...doc, content} : doc)));
    if (id === activeDocId) {
      setMarkdown(content);
    }
  };

  const handleDocumentRename = (id: number, name: string) => {
    setDocuments(docs => docs.map(doc => (doc.id === id ? { ...doc, name} : doc)))
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
    if (updatedDocuments.length > 0){
      const nextActiveDoc = updatedDocuments[0];
      setActiveDocId(nextActiveDoc.id);
      setMarkdown(nextActiveDoc.content);

    } else {
      setActiveDocId(0);
      setMarkdown('');
    }
  }

  return (
    <div className='min-h-screen flex flex-col '>
      
      <nav className='flex items-center justify-between border border-[rgb(43,45,49)] bg-[#2B2D31] rounded-none  w-full  h-[72px]'>
        <div className='flex items-center gap-2 md:gap-4  md:ml-3'>
          <img src={Menu} alt='' className=' w-6  md:w-7 h-4 cursor-pointer' onClick={handleSideBarToggle}/>
          <img src={MARKDOWN} alt='' className='hidden md:block md:w-32 md:h-3 ' />

          <DocumentName name={documents.find(doc => doc.id === activeDocId)?.name || ''} 
            onRename={(name) => handleDocumentRename(activeDocId, name)}
          />

        </div>
        <div className='flex items-center  gap-2 md:gap-4 md:mr-3'>
          <img onClick={handleDelete}
          src={Trash} 
          alt='' 
          className=' w-4 h-5 cursor-pointer'/>
          <SaveButton onSave={handleSave}/>
        </div>
      </nav>


      <div className='flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        
        <Editor markdown = {markdown} setMarkdown = {(content) => handleDocumentChange(activeDocId, content)} />
        <Preview markdown={markdown}/>
      </div>
     {isSideBarOpen && <SideBar onClose={handleSideBarToggle} documents={documents} onNewDocument={handleNewDocument} 
        onDocumentClick={(id) => { setActiveDocId(id); setMarkdown(documents.find(doc => doc.id === id)?.content || '');}}   
     />}
    </div>
  )
}

export default App
