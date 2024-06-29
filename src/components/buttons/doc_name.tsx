import React, { useState } from 'react';
import doc from '../../assets/doc.png';

interface DocumentNameProps {
    name: string;
    onRename: (newname: string) => void;
}

const DocumentName: React.FC<DocumentNameProps> = ({ name, onRename }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleRename = () => {
        setIsEditing(false);
        onRename(newName);
    };

    return (
        <div className='flex border  border-[#2B2D31] bg-[#2B2D31]  cursor-pointer h-14 md:h-16 rounded-none justify-center items-center pr-12'>
            <div className='relative flex items-center w-full'>
                <div className='hidden md:block border-l-2 bg-[#5A6069]'></div>
                <img
                    className='absolute left-3 top-3 md:left-0  md:ml-2'
                    src={doc} alt='doc'
                />
                <div className='pl-10 bg-[#2B2D31] w-full '>
                    <h1 className='hidden md:block text-[13px] font-normal text-[#7C8187] font-roboto'>Document Name</h1>
                    {isEditing ? (
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder='Untitled Document.md'
                            onBlur={handleRename}
                            onKeyPress={(e) => e.key === 'Enter' && handleRename()}
                            className=' bg-transparent border-b border-gray-400 focus:outline-none text-white  w-full'

                        />
                    ) : (

                        <div >

                            <h1 onClick={() => setIsEditing(true)} className='cursor-pointer pt-3 md:pt-0 text-sm font-normal text-white font-roboto'>
                                {name}
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default DocumentName;