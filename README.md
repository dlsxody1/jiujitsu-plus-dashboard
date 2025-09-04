# 🥋 주짓수 출석 관리 시스템

주짓수 도장 관원들의 출석, 회비, 승급 히스토리를 체계적으로 관리하는 웹 애플리케이션입니다.

## 🛠️ 기술 스택

### Frontend

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Libraries & Tools

![TanStack Router](https://img.shields.io/badge/TanStack_Router-FF4154?style=for-the-badge&logo=react-router&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### Backend & Database

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 📖 프로젝트 설명

### 주요 기능

- **출석 관리**: 관원들의 일별 출석 현황 및 시간대별 출석 기록
- **회비 관리**: 회비 납입 이력 및 다음 납입 예정일 알림
- **승급 히스토리**: 벨트 승급 기록 및 진급 과정 추적
- **공지사항**: 도장 소식 및 중요 안내사항 전달
- **개인 대시보드**: 관원별 맞춤형 정보 제공

### 대상 사용자

- **관원**: 개인 출석 현황, 회비 납입 상태, 승급 히스토리 확인
- **관리자**: 전체 관원 관리, 출석 체크, 회비 관리, 공지사항 작성

## ✅ 구현 TODO

### 🏗️ 프로젝트 기반 설정

- [ ] Vite + React + TypeScript 프로젝트 초기화
- [ ] TanStack Router 설정 및 라우팅 구조 구성
- [ ] TanStack Query 설정 및 API 클라이언트 구성
- [ ] Tailwind CSS 및 shadcn/ui 설정
- [ ] Supabase 프로젝트 생성 및 데이터베이스 스키마 설계
- [ ] 환경 변수 설정 (.env 파일 구성)
- [ ] ESLint, Prettier 설정
- [ ] 프로젝트 디렉토리 구조 설계

### 🗄️ 데이터베이스 스키마 설계

- [ ] 사용자(Users) 테이블 설계
  - [ ] 기본 정보: 이름, 생년월일, 연락처, 등록일
  - [ ] 벨트 등급, 상태(활성/비활성)
- [ ] 출석(Attendance) 테이블 설계
  - [ ] 출석 날짜, 시간대, 사용자 ID
- [ ] 회비(Payment) 테이블 설계
  - [ ] 납입 날짜, 금액, 다음 납입 예정일
- [ ] 승급(Promotion) 테이블 설계
  - [ ] 승급 날짜, 이전 벨트, 현재 벨트
- [ ] 공지사항(Notice) 테이블 설계
  - [ ] 제목, 내용, 작성일, 중요도

### 🔐 인증 시스템

- [ ] Supabase Auth 연동
- [ ] 로그인/로그아웃 기능 구현
- [ ] 사용자 권한 관리 (관원/관리자)
- [ ] Protected Route 구현
- [ ] 인증 상태 전역 관리

### 👥 사용자 관리 (도메인: User)

- [ ] 관원 목록 조회 기능
- [ ] 관원 상세 정보 조회
- [ ] 신규 관원 등록 기능
- [ ] 관원 정보 수정 기능
- [ ] 관원 상태 변경 (활성/비활성)
- [ ] 관원 검색 및 필터링
- [ ] 관원 프로필 이미지 업로드

### 📅 출석 관리 (도메인: Attendance)

- [ ] 일별 출석 체크 인터페이스
- [ ] 시간대별 출석 현황 표시
- [ ] 출석 달력 뷰 구현
- [ ] 개인별 출석 통계
- [ ] 월별/주별 출석률 분석
- [ ] 출석 기록 수정/삭제 기능
- [ ] 출석 현황 엑셀 내보내기

### 💰 회비 관리 (도메인: Payment)

- [ ] 회비 납입 기록 등록
- [ ] 회비 납입 이력 조회
- [ ] 다음 납입 예정일 계산 및 표시
- [ ] 납입 알림 기능
- [ ] 연체자 목록 관리
- [ ] 회비 통계 및 리포트
- [ ] 영수증 생성 기능

### 🏆 승급 관리 (도메인: Promotion)

- [ ] 승급 기록 등록 기능
- [ ] 개인별 승급 히스토리 조회
- [ ] 벨트별 관원 현황
- [ ] 승급 예정자 관리
- [ ] 승급 증서 생성 기능
- [ ] 승급 통계 대시보드

### 📢 공지사항 (도메인: Notice)

- [ ] 공지사항 작성 기능 (관리자)
- [ ] 공지사항 목록 조회
- [ ] 공지사항 상세 보기
- [ ] 중요 공지 상단 고정
- [ ] 공지사항 카테고리 분류
- [ ] 공지사항 검색 기능
- [ ] 첨부파일 업로드 지원

### 📊 대시보드 (도메인: Dashboard)

- [ ] 관원용 개인 대시보드
  - [ ] 개인 출석률 위젯
  - [ ] 다음 회비 납입일 알림
  - [ ] 최근 공지사항 표시
  - [ ] 승급 진행 상황
- [ ] 관리자용 통합 대시보드
  - [ ] 전체 출석 현황 위젯
  - [ ] 회비 미납자 알림
  - [ ] 일일 출석자 수 통계
  - [ ] 월간 수익 현황

### 🎨 UI/UX 구현

- [ ] 반응형 레이아웃 구현
- [ ] 다크/라이트 테마 지원
- [ ] 로딩 상태 및 에러 핸들링
- [ ] 알림 토스트 시스템
- [ ] 모바일 최적화
- [ ] 접근성 가이드라인 준수
- [ ] 스켈레톤 로딩 구현

### 🔧 부가 기능

- [ ] 데이터 백업 기능
- [ ] 이메일 알림 시스템
- [ ] PWA 지원 (오프라인 사용)
- [ ] QR코드 출석 체크
- [ ] 관원증 생성 기능
- [ ] 다국어 지원 (한국어/영어)

### 🚀 배포 및 운영

- [ ] Vercel 배포 설정
- [ ] 환경별 설정 관리 (dev/prod)
- [ ] 에러 모니터링 설정
- [ ] 성능 최적화
- [ ] SEO 최적화
- [ ] 도메인 연결 및 SSL 설정
- [ ] 백업 전략 수립

### 🧪 테스팅 및 품질 관리

- [ ] 단위 테스트 작성
- [ ] 통합 테스트 구현
- [ ] E2E 테스트 시나리오
- [ ] 코드 품질 검사 자동화
- [ ] 성능 테스트 및 모니터링

---
