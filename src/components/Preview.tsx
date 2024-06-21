import '../App.css'
import DOMPurify from "dompurify";
import { marked } from "marked";
import eye from '../assets/eye.png';
import EyeOff from '../assets/EyeOff.png'
import { useState } from 'react';


interface PreviewProps {
    markdown: string;
    isDarkMode: boolean;
}


function Preview({ markdown, isDarkMode }: PreviewProps) {
    
    const [isPreviewOnly, setIsPreviewOnly] = useState(false);
        
    marked.setOptions({
        breaks: true,
        gfm: true
    });

    const parsed: string = marked(markdown) as string;
    const cleanHtml = DOMPurify.sanitize(parsed)
    
    const togglePreview = () => {
        setIsPreviewOnly(!isPreviewOnly);
    }

    return (

        <div className={`overflow-auto ${isPreviewOnly ? 'preview-only' : ''}`}>
            <div className={`flex justify-between items-center  text-[#7C8187] ${ isDarkMode ? 'bg-[#1D1F22] text-[#C1C4CB]' : 'bg-[#F5F5F5] text-[#7C8187]'}`}>
                <h1 className= 'text-[#7C8187]  font-roboto text-sm p-1'>PREVIEW</h1>
                < img 
                    src={isPreviewOnly ? EyeOff : eye} 
                    alt='eye' 
                    className=' w-4 h-3 cursor-pointer hover:bg-[#E46643] '
                    onClick={togglePreview}
                    />
                    
            </div>
            <div className="prose preview-content preview-text p-6"  dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
        </div>
    )
}
export default Preview