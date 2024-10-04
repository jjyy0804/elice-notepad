import { useState } from 'react';
import RegisterModal from '../components/modal/RegisterModal';
import useWords, { Words } from '../hooks/useWords';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import DeleteModal from '../components/modal/DeleteModal';
import UpdateModal from '../components/modal/UpdateModal';
const Notepad = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedItem, setSeletedItem] = useState<Words>();
  const [search, setSearch] = useState('');
  const { words, filteredWords } = useWords(search);

  const handleRegisterModalOpen = () => {
    setIsRegisterModalOpen(true);
  };
  const handleRegisterModalClose = () => {
    setIsRegisterModalOpen(false);
  };
  const handleDeleteModalOpen = (word: Words) => {
    setIsDeleteModalOpen(true);
    setSeletedItem(word);
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };
  const handleUpdateModalOpen = (word: Words) => {
    setIsUpdateModalOpen(true);
    setSeletedItem(word);
  };
  const handleUpdateModalClose = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex  items-center p-9 w-full">
        <div className="flex items-center w-full justify-center relative">
          <p className="font-bold text-2xl text-indigo-700">단어 목록</p>
          <div className="flex jutify-end gap-2 absolute right-0 mr-10">
            <button
              className="w-auto bg-indigo-500 text-white p-2 rounded-md hover:bg-blue-600 flex-shrink-0"
              onClick={handleRegisterModalOpen}
            >
              추가
            </button>
            <button className="w-auto bg-indigo-500 text-white p-2 rounded-md hover:bg-blue-600 flex-shrink-0">
              커버 변경
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <input
          type="text"
          className="w-full max-w-lg  border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:border-transparent"
          placeholder="검색할 단어를 입력하세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-center">
          <ul className="max-w-lg w-screen space-y-2">
            {filteredWords && words.length > 0 ? (
              filteredWords.map((word, index) => (
                <li
                  className="bg-indigo-300 p-3 rounded-md hover:bg-indigo-400 flex justify-between group"
                  key={index}
                >
                  {word.text}
                  <div className="flex gap-2 text-2xl hidden group-hover:flex text-white">
                    <button onClick={() => handleUpdateModalOpen(word)}>
                      <FiEdit />
                    </button>
                    <button onClick={() => handleDeleteModalOpen(word)}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>항목이 없습니다.</li>
            )}
          </ul>
        </div>
      </div>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleRegisterModalClose}
      />
      <DeleteModal
        selectedItem={selectedItem}
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
      />
      <UpdateModal
        selectedItem={selectedItem}
        isOpen={isUpdateModalOpen}
        onClose={handleUpdateModalClose}
      />
    </div>
  );
};

export default Notepad;
