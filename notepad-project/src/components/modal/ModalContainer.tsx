import { ReactNode } from 'react';
//모달 컨테이너
const ModalContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full h-64 max-w-lg bg-white p-6 rounded-md shadow-md flex flex-col gap-2 justify-center relative">
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
