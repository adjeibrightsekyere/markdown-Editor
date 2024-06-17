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

  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className='min-h-screen flex flex-col '>
      
      <nav className='flex items-center justify-between border border-[rgb(43,45,49)] bg-[#2B2D31] rounded-none  w-full  h-[72px]'>
        <div className='flex items-center gap-2 md:gap-4  md:ml-3'>
          <img src={Menu} alt='' className=' w-6  md:w-7 h-4 cursor-pointer'/>
          <img src={MARKDOWN} alt='' className='hidden md:block md:w-32 md:h-3 ' />
          {/*<div className='border-r-5 border-white'></div>*/}
          <DocumentName />
        </div>
        <div className='flex items-center  gap-2 md:gap-4 md:mr-3'>
          <img src={Trash} alt='' className=' w-4 h-5 cursor-pointer'/>
          <SaveButton />
        </div>
      </nav>


      <div className='flex-grow grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        
        <Editor markdown = {markdown} setMarkdown = {setMarkdown} />
        <Preview markdown={markdown}/>
      </div>
      <SideBar onClose={handleSideBarToggle}/>
    </div>
  )
}

export default App
