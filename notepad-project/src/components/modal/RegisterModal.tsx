import React, { useEffect, useState } from 'react';
import useWords from '../../hooks/useWords';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full h-64 max-w-lg bg-white p-6 rounded-md shadow-md flex flex-col gap-2 justify-center relative">
        <div className="flex  justify-center">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            단어 추가
          </h2>
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
      </div>
    </div>
  );
};

export default RegisterModal;