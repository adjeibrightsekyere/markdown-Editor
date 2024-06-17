interface EditorProps {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}

function Editor({markdown, setMarkdown}: EditorProps) {
    return(
       <div className="flex flex-col h-full md:border-r-2 border-[#979797]">
            <div className="bg-[#F5F5F5] text-[#7C8187] font-roboto p-1 text-sm">
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