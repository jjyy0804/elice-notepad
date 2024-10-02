import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export interface Words {
  id: string;
  text: string;
}
const useWords = () => {
  const [words, setWords] = useState<Words[]>([]);
  const wordsCollectionRef = collection(db, 'words');
  useEffect(() => {
    const fetchWords = async () => {
      const wordSnapshot = await getDocs(wordsCollectionRef);
      const wordList = wordSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Words[];
      setWords(wordList);
    };

    fetchWords();
  }, [words]);
  const addWord = async (text: string) => {
    try {
      const newWord = {
        text,
      };
      await addDoc(wordsCollectionRef, newWord);
      setWords((prevWords) => [
        ...prevWords,
        { id: wordsCollectionRef.id, ...newWord },
      ]);
    } catch (error) {
      console.log('firestore 등록 실패', error);
    }
    console.log('등록');
  };

  return { words, addWord };
};
export default useWords;
