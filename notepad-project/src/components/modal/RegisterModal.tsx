import { useState } from 'react';
import useWords from '../../hooks/useWords';
import { ModalProps } from './DeleteModal';
import ModalContainer from './ModalContainer';

const RegisterModal = ({ isOpen, onClose }: ModalProps) => {
  const [wordInput, setWordInput] = useState('');
  const { addWord } = useWords('');
  const handleConfirmClick = () => {
    addWord(wordInput);
    onClose();
    setWordInput('');
  };
  const handleCloseClick = () => {
    onClose();
    setWordInput('');
  };
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="flex  justify-center">
        <h2 className="text-lg font-bold mb-4 flex items-center">단어 추가</h2>
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
        value={wordInput}
        onChange={(e) => setWordInput(e.target.value)}
      />
      <button
        onClick={handleConfirmClick}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-400"
        disabled={!wordInput.trim()}
      >
        등록
      </button>
    </ModalContainer>
  );
};

export default RegisterModal;
