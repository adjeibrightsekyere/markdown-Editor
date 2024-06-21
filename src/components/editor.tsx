import '../App.css'

interface EditorProps {
    markdown: string;
    setMarkdown: (markdown: string) => void;
    isDarkMode: boolean;
}

function Editor({markdown, setMarkdown, isDarkMode}: EditorProps) {
    return(
       <div className="flex flex-col h-full md:border-r-2 border-[#979797] ">
            <div className={`  text-[#7C8187] font-roboto p-1 text-sm ${ isDarkMode ? 'bg-[#1D1F22] text-[#C1C4CB]' : 'bg-[#F5F5F5] text-[#7C8187]'}`}>
                MARKDOWN
            </div>
            <textarea 
            placeholder="bio" 
            value={markdown}
            className="prose flex-grow w-full h-full overflow-hidden outline-none p-6 resize-none"  onChange={(e) => setMarkdown (e.target.value)}>
                {markdown}
            </textarea>
       </div>
        
    )
}
export default Editor;