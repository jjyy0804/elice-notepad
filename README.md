# 단어장 프로젝트

이 프로젝트는 **React**, **Firebase**, **Tailwind CSS**를 사용하여 개발된 단어장입니다. 사용자가 단어를 추가, 수정, 삭제할 수 있으며, Firebase Storage를 통해 웹페이지의 배경 이미지를 변경할 수 있습니다. 이 프로젝트는 **CRUD**(Create, Read, Update, Delete) 기능과 파일 처리 기능을 보여줍니다.

## 주요 기능

- 단어 추가, 수정, 삭제 기능
- Firebase Storage를 이용한 배경 이미지 변경
- Firebase Firestore와의 실시간 데이터 동기화
- Tailwind CSS를 활용한 반응형 디자인

## 사용된 기술

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)


![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 시작하기

### 사전 준비

프로젝트를 시작하기 전에 다음이 준비되어 있어야 합니다:

- Node.js 및 npm 설치
- Firebase 계정 및 프로젝트 설정 완료


## 프로젝트 구조
```
notepad-project/
│
├── src/                     # 소스 코드 폴더
│   ├── components/modal/    # 모달 관련 컴포넌트
│   │   ├── DeleteModal.tsx  # 단어 삭제 모달
│   │   ├── ModalContainer.tsx # 모달 컨테이너 컴포넌트
│   │   ├── RegisterModal.tsx # 단어 등록 모달
│   │   └── UpdateModal.tsx  # 단어 수정 모달
│   ├── hooks/
│   │   └── useWords.ts      # Firestore를 사용하는 커스텀 훅
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.tsx         # 홈 페이지
│   │   └── Notepad.tsx      # 단어장 페이지
│   ├── App.tsx              # 메인 애플리케이션 파일
│   ├── firebaseConfig.ts    # Firebase 설정 파일
│   └── index.tsx            # 프로젝트 진입점
├── .gitignore               # Git에서 무시할 파일 목록
├── package.json             # 프로젝트 정보 및 의존성 목록
├── README.md                # 프로젝트 설명 파일
```
