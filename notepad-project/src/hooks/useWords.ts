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

const useWords = (search: string) => {
  const [words, setWords] = useState<Words[]>([]);
  const [filteredWords, setFilteredWords] = useState(words);
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
  }, []);

  useEffect(() => {
    const filtered = search
      ? words.filter((word) => word.text.includes(search))
      : words;
    const sorted = filtered.sort((a, b) => a.text.localeCompare(b.text));
    setFilteredWords(sorted);
  }, [search, words]);

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

  return { words, addWord, filteredWords };
};
export default useWords;