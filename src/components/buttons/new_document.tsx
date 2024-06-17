import React from 'react';

const NewDocument: React.FC = () => {
    return (
        <div>
            <div className='flex border border-[#E46643] bg-[#E46643] hover:bg-[#F39765] cursor-pointer w-52 h-10 rounded-[4px] justify-center items-center gap-2'>
                <h1 className=' text-sm font-normal text-white font-roboto'>+ New Document</h1>
            </div>
        </div>
    )
}
export default NewDocument;