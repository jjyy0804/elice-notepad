import { useEffect, useState } from 'react';
import useWords from '../../hooks/useWords';
import { ModalProps } from './DeleteModal';
import ModalContainer from './ModalContainer';

const UpdateModal = ({ isOpen, onClose, selectedItem }: ModalProps) => {
  const [updateInput, setUpdateInput] = useState(selectedItem?.text);
  const { updateWord } = useWords('');
  useEffect(() => {
    if (isOpen && selectedItem) {
      setUpdateInput(selectedItem.text);
    }
  }, [isOpen, selectedItem]);
  const handleCloseClick = () => {
    onClose();
  };
  const handleUpdateConFirm = () => {
    if (selectedItem) updateWord(selectedItem.id, updateInput || '');
    onClose();
  };
  if (!isOpen) return null;
  return (
    <ModalContainer>
      <div className="flex  justify-center">
        <h2 className="text-lg font-bold mb-4 flex items-center">단어 수정</h2>
        <button
          onClick={handleCloseClick}
          className="bg-gray-200 w-fit absolute top-2 right-2 p-2 rounded-md items-center"
        >
          닫기
        </button>
      </div>
      <input
        type="text"
        placeholder="새로운 단어를 입력하세요"
        className="border p-2 rounded-md w-full"
        value={updateInput}
        onChange={(e) => setUpdateInput(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-400"
        onClick={handleUpdateConFirm}
      >
        수정
      </button>
    </ModalContainer>
  );
};

export default UpdateModal;
