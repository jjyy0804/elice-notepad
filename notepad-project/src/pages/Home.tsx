import { useNavigate } from 'react-router-dom';
import { logInWithGoogle } from '../services/authService';
const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    try {
      const user = await logInWithGoogle();
      console.log('로그인 성공', user);
      navigate('/notepad');
    } catch (error) {
      console.log('로그인 실패', error);
    }
  };
  return (
    <div>
      <div className="min-h-lvh flex flex-col justify-center items-center gap-4 ">
        <h1 className="font-bold text-indigo-500 text-2xl">Note Pad</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleLoginClick}
        >
          구글로 로그인
        </button>
      </div>
    </div>
  );
};

export default Home;
