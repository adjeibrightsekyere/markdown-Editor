import React from 'react';
import doc from '../../assets/doc.png';

const DocumentName: React.FC = () => {
    return (
        <div className='flex border border-[#2B2D31] bg-[#2B2D31] hover:bg-[#35393F] cursor-pointer w-80 h-16 rounded-none justify-center items-center pr-12'>
            <div className='relative'>
                <img
                    className='absolute right-40 top-3'
                    src={doc} alt='' />
                <h1 className='hidden md:block text-[13px] font-normal text-[#7C8187] font-roboto'>Document Name</h1>
                <h1
                    className='pt-3 md:pt-0 text-sm font-normal text-white font-roboto'>Untitled Document.md</h1>
            </div>

        </div>
    )
}
export default DocumentName;