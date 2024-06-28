import '../App.css'
import { useState } from 'react';
import eye from '../assets/eye.png';
import EyeOff from '../assets/EyeOff.png';

interface EditorProps {
    markdown: string;
    setMarkdown: (markdown: string) => void;
    isDarkMode: boolean;
}

function Editor({ markdown, setMarkdown, isDarkMode }: EditorProps) {
    const [isEditorOnly, setIsEditorOnly] = useState(false);

    const toggleEditor = () => {
        setIsEditorOnly(!isEditorOnly);
    }

    return (
        <div className={`overflow-auto flex flex-col h-full ${isEditorOnly ? 'editor-only' : 'md:border-r-2 border-[#979797]'} `}>
            <div className={`flex  justify-between  items-center text-[#7C8187] font-roboto p-1 text-sm ${isDarkMode ? 'bg-[#1D1F22] text-[#C1C4CB]' : 'bg-[#F5F5F5] text-[#7C8187]'}`}>
                <div className={`text-[#7C8187]  font-roboto pl-1 text-sm ${isDarkMode ? 'bg-[#1D1F22] text-[#C1C4CB]' : 'bg-[#F5F5F5] text-[#7C8187]'}`}>
                    MARKDOWN
                </div>
                <img
                    src={isEditorOnly ? EyeOff : eye}
                    alt='eye'
                    className='block md:hidden w-4 h-3 cursor-pointer hover:bg-[#E46643]'
                    onClick={toggleEditor}
                />
            </div>

            <textarea
                placeholder="bio"
                value={markdown}
                className=" flex-grow w-full h-full overflow-auto md:overflow-hidden outline-none p-6 resize-none" onChange={(e) => setMarkdown(e.target.value)}>
                {markdown}
            </textarea>
        </div>

    )
}
export default Editor;