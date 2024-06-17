import '../App.css'
import DOMPurify from "dompurify";
import { marked } from "marked";

interface PreviewProps {
    markdown: string;
}


function Preview({markdown}: PreviewProps) {
    const parsed: string = marked(markdown) as string;
    const cleanHtml = DOMPurify.sanitize(parsed)
    return (
        
        <div>
            <h1 className="bg-[#F5F5F5] text-[#7C8187] font-roboto text-sm p-1">PREVIEW</h1>
            <div className="prose  p-6" dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
        </div>
    )
}
export default Preview