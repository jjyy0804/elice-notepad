const Notepad = () => {
  return (
    <div className="">
      <div className="flex  items-center p-9 w-full">
        <div className="flex items-center w-full justify-center relative">
          <p className="font-bold text-2xl text-indigo-700">단어 목록</p>
          <div className="flex jutify-end gap-2 absolute right-0 mr-10">
            <button className="w-auto bg-indigo-500 text-white p-2 rounded-md hover:bg-blue-600 flex-shrink-0">
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
        />
        <div className="flex justify-center">
          <ul className="max-w-lg w-screen space-y-2">
            <li className="bg-indigo-300 p-3 rounded-md">단어 1</li>
            <li className="bg-indigo-300 p-3 rounded-md">단어 1</li>
            <li className="bg-indigo-300 p-3 rounded-md">단어 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
