import React from 'react';
import Close from '../assets/Close.png';
import NewDocument from './buttons/new_document';
import ToggleMode from './togglemodes';

interface SideBarProps{
    onClose: () => void;
    documents: { id: number; name: string}[];
    onNewDocument: () => void;
    onDocumentClick: (id: number) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}
const SideBar: React.FC<SideBarProps> = ({onClose, documents, onNewDocument, onDocumentClick, isDarkMode, setIsDarkMode}) => {
    return(
        <div className="fixed top-0 left-0 h-full w-64 bg-[#2B2D31] text-white z-50">
            <div className='flex justify-between items-center p-4'>
                <h2 className=' text-sm font-roboto uppercase'>MY Documents</h2>
                <div className='flex border border-[#35393F] w-16 h-16 bg-[#35393F]'>
                <img src={Close} alt='close' className='flex absolute top-10 right-10 w-6 h-6 cursor-pointer ' onClick={onClose}/>
                </div>
            </div>
            <div onClick={onNewDocument} className='p-4'>
            <NewDocument  />
            </div>
            <ul>
                {documents.map(doc => (
                    <li key={doc.id} onClick={() => onDocumentClick(doc.id)} 
                    className='cursor-pointer p-5  hover:bg-gray-700 rounded'
                    >
                        {doc.name}
                    </li>
                ))}
            </ul>
            <div className='absolute  -bottom-[600px] left-7 flex justify-center'>
                <ToggleMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            </div>
        </div>
    )
}
export default SideBar;