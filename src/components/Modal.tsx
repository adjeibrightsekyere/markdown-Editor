

interface ModalProps {
    title: string;
    content: string;
    onConfirm: () => void;
    onCancel: () => void;
    isDarkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, content, onConfirm, onCancel, isDarkMode }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 ${isDarkMode ? 'bg-[#979797]' : 'bg-[#7C8187]'}`}>
            <div className={`p-4 rounded-none shadow-lg ${isDarkMode ? 'bg-[#1D1F22] text-white ' : 'bg-white text-black'}`}>
                <h2 className='text-xl font-roboto-slab font-bold mb-4'>{title}</h2>
                <p className={`mb-4 font-roboto-slab text-sm ${isDarkMode ? 'text-[#C1C4CB]' : 'text-[#7C8187] '}`} dangerouslySetInnerHTML={{__html: content}}></p>
                <div className='flex justify-end gap-2'>
                    <button
                        className='px-4 py-2 text-sm font-roboto bg-[#E46643] hover:bg-[#F39765] text-white rounded'
                        onClick={onConfirm}
                    >
                        Confirm & Delete
                    </button>
                    <button className='px-4 bg-gray-300 text-sm font-roboto text-black rounded' onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;