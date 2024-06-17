import React from "react";
import save from '../../assets/save.png';

const SaveButton: React.FC = () => {
    return (
        <div className='flex border border-[#E46643] bg-[#E46643] hover:bg-[#F39765] cursor-pointer w-10 md:w-36 h-10 rounded-[4px] justify-center items-center md:gap-2'>
            <img
                className=' w-4 h-4'
                src={save} alt='save' />
            <h1 className='hidden md:block text-sm font-normal text-white font-roboto'>Save Changes</h1>
        </div>
    )
}
export default SaveButton;