import useWords, { Words } from '../../hooks/useWords';
import ModalContainer from './ModalContainer';
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: Words;
}
const DeleteModal = ({ isOpen, onClose, selectedItem }: ModalProps) => {
  const { words, deleteWord } = useWords('');
  const handleConfirmDelete = () => {
    if (selectedItem) deleteWord(selectedItem.id);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <ModalContainer>
      <h2 className="text-lg font-bold mb-4 flex justify-center items-center">
        [{selectedItem ? selectedItem.text : ''}] 삭제하시겠습니까?
      </h2>
      <div className="flex gap-3 justify-center mt-5">
        <button
          className="bg-gray-200 w-fit  p-2 rounded-md items-center"
          onClick={handleConfirmDelete}
        >
          확인
        </button>
        <button
          className="bg-gray-200 w-fit  p-2 rounded-md items-center"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
