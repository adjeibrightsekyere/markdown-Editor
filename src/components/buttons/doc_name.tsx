import React, { useState } from 'react';
import doc from '../../assets/doc.png';

interface DocumentNameProps {
    name: string;
    onRename: (newname: string) => void;
}

const DocumentName: React.FC<DocumentNameProps> = ({ name, onRename}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleRename = () => {
        setIsEditing(false);
        onRename(newName);
    };
    
    return (
       <div>
       { isEditing ? (
            <input 
            type="text" 
            value= {newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder='Untitled Document.md'
            onBlur={handleRename}
            onKeyPress={(e) => e.key === 'Enter' && handleRename()}
            className=' bg-transparent border-b border-gray-400 focus:outline-none'
            />
       ) : 
       
      ( <div className='flex border border-[#2B2D31] bg-[#2B2D31] hover:bg-[#35393F] cursor-pointer w-80 h-16 rounded-none justify-center items-center pr-12'>
            <div className='relative'>
                <img
                    className='absolute right-40 top-3'
                    src={doc} alt='' />
                <h1 className='hidden md:block text-[13px] font-normal text-[#7C8187] font-roboto'>Document Name</h1>
                <h1 onClick={() => setIsEditing(true)} className='cursor-pointer pt-3 md:pt-0 text-sm font-normal text-white font-roboto'>
                    {name}
                </h1>
            </div>

        </div>
        )}
        </div>
    )
}
export default DocumentName;