
import '../App.css';

import Moon from '../assets/Moon.png';
import Sun from '../assets/Sun.png';

interface ToggleModeProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkmode: boolean) => void;
}


const ToggleMode: React.FC<ToggleModeProps> = ({ isDarkMode, setIsDarkMode}) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={`min-h-screen flex   ${isDarkMode ? 'bg-[#151619] text-white' : 'bg-white text-black'}`} >
            <div className=' flex border border-[#2B2D31] bg-[#2B2D31]  cursor-pointer w-40 h-20 rounded-none justify-center items-center gap-2'>
                <img
                    src={Moon}
                    alt='moon'
                    className={`transition-opacity ${isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
                <div
                    onClick={toggleDarkMode}
                    className={`relative w-12 h-6 bg-[#B4B4B4] rounded-full flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                    <div className={`absolute w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${isDarkMode ? 'translate-x-7' : 'translate-x-2'}`}>
                    </div>
                </div>
                <img
                    src={Sun}
                    alt='sun'
                    className={`transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-50'}`} />
            </div>
        </div>
    )
}
export default ToggleMode;