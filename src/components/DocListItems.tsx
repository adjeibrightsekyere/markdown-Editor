import React from 'react';
import doc from '../assets/doc.png';

interface DocumentListItemProps{
    name: string;
    date: string;
}

const DocumentListItem: React.FC<DocumentListItemProps> =({name, date}) => {
    return (
        <div  className='flex items-center border border-[#2B2D31] bg-[#2B2D31] cursor-pointer w-full h-16 rounded-none p-2'>
            <img src={doc} alt='doc' className=' mr-2' />
            <div className="flex flex-col">
                <p className='text-xs text-[#7C8187]'>{date}</p>
                <h1 className='text-sm font-normal text-white hover:text-[#E46643] font-roboto'>
                    {name}
                </h1>
            </div>
        </div>
    )
}
export default DocumentListItem;