import React from 'react';
import Close from '../assets/Close.png';
import NewDocument from './buttons/new_document';
import ToggleMode from './togglemodes';
import DocumentListItem from './DocListItems';

interface SideBarProps {
    onClose: () => void;
    documents: { id: number; name: string; date: string; }[];
    onNewDocument: () => void;
    onDocumentClick: (id: number) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}
const SideBar: React.FC<SideBarProps> = ({ onClose, documents, onNewDocument, onDocumentClick, isDarkMode, setIsDarkMode }) => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#2B2D31] text-white z-50  flex-col justify-between">
            
                <div className='flex justify-between items-center p-4'>
                    <h2 className=' text-sm font-roboto uppercase'>MY Documents</h2>
                    <div className='flex absolute right-0 top-0 border border-[#35393F] w-16 h-14 md:h-[72px] bg-[#35393F]'>
                        <img src={Close} alt='close' className='flex absolute top-5 right-5 w-6 h-6 cursor-pointer ' onClick={onClose} />
                    </div>
                </div>
                <div onClick={onNewDocument} className='p-4 mt-4'>
                    <NewDocument />
                </div>
                <div className='  overflow-y-auto'>
                <ul>
                    {documents.map(doc => (
                        <li key={doc.id} onClick={() => onDocumentClick(doc.id)}
                            className='cursor-pointer p-2 '
                        >
                            <DocumentListItem name={doc.name} date={doc.date} />
                        </li>
                    ))}
                </ul>
                </div>
            <div className=' mt-auto'>
                <ToggleMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
        </div>
    )
}
export default SideBar;