# 척척밥상

상품정보를 제공 받아 사용자에게 페이지를 보여주는 프론트엔드 과제 프로젝트입니다.

---

## 기술 스택

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Tanstank-Query**
- **Axios**

---

## 프로젝트 구조

```txt
src/
 ├ app/                    # Next.js App Router
 │  ├ layout.tsx           # 루트 레이아웃
 │  ├ page.tsx             # 홈 페이지
 │  ├ globals.css          # 전역 CSS
 ├ api/                    # API 요청 및 API 타입 정의
 │  ├ types/               # BaseResponse global 선언
 │  └ axios.ts             # axios 인스턴스 설정
 │  └ getQueryClient.ts    # 서버/클라이언트 별 QueryClient 관리 함수
 ├ assets/                 # 정적 자산
 ├ components/             # 컴포넌트
 │  ├ common/              # 공통 컴포넌트
 │  └ products/            # 상품 페이지 컴포넌트
 ├ const/                  # 관련 상수 정의
 │  └ query-key/           # Tanstank-Query query-key 정의
 ├ hooks/                         
 │  └ queries/             # Query 훅
  ├ providers/                         
 │  └ QueryProvider.ts     # Tanstank-Query provider 정의
 └ utiles/                 # 유틸 함수


```

---

## 주요 기능
- 음식 상품 리스트 조회
- Skeleton UI를 활용한 로딩 처리
- 품절 상품 UI 처리
- 재고 기준 정렬 처리
  - 기본 index 오름차순
  - 재고가 없는 상품은 리스트 하단 배치
---

## 시작하기

### env.local

```env
NEXT_PUBLIC_API_BASE_URL=your_api_base_url
```

AND

```bash
npm run install
npm run dev
```
---

## 라우팅

- `/` - /app/page.tsx  #상품 리스트 페이지

---

## 주요 구현 사항

- ### Server + Client 데이터 패칭 분리
  - **Server Component** : `fetch` + `prefetchQuery` 사용
  - **Client Component** : `axios` + `react-query` 사용

- ### Skeleton UI
  - 서버 응답 지연(1~5초) 상황을 위해 사용자를 고려한 Skeleton UI 적용

- ### 품절 상품 처리
  - 재고가 없는 제품은 리스트 하단 배치 및 UI 처리 
- ### 반응형 웹
  -  1280px, 768px을 분기 처리하여 반응형 웹 구현

