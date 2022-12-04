# FMS 개발실 프론트엔드 면접 과제

# 패키지 설치

1. yarn
2. yarn prepare (허스키 설치)
3. yarn dev
## 🕒 Project Period
2021.12.01 ~ 2021.12.04 (총 4일)

## 과제
### 1. 상태관리 
- 로그인 페이지에서 로그인 
>custom hooks를 이용한 로그인 폼작성

Change event, FormEvent, react-hook-form으로 상태 관리를 하려고 했지만 
과제를 계기로 커스텀 hooks를 작성했습니다.

>useForm의 매개변수들
```
const useForm = ({
  initialValues,
  onSubmit,
  validate,
  errorModal,
}: useFormProps) => {

const [values, setValues] = useState(initialValues);
const [errors, setErrors] = useState<Record<string, string>>({});
const [submitting, setSubmitting] = useState(false);

..생략

}
```
**initialValues**:객체로 생성해서 하나의 state로 관리하는 초기값

**onSubmit**:제출시 어떤 행도을 할건지 작성 할 수 있는 제출 함수를 선언

**validate**:유효성 검사를 할 수 있는 검증 함수를 선언

**errorModal**:에러 발생 모달을 사용 할 수 있게 도와주는 state


[참고 자료](https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon)


- 로그인 된 상태가 전역에서 유지 되어야함
>**ContextAPI**를 이용한 전역 상태관리
(추가적으로 다시 불러 올 상황을 대비해서 **localStorage**에객체로 저장 했습니다.)


### 2. api 통신 (api 통신을 통해 결과 화면 출력)
   - api/farm "GET" 요청 
  > fetch api와 useEffect를 이용한 데이터 렌더링

   - api/addFarm "POST" 요청
  >fetch api와 useForm을 이용한 데이터 렌더링


### 3. 화면 조작
   - 호출 받은 데이터 총 합 구하는 함수 작성후 props 내리기
```
  const totalProduction = (productions: ProductionType[]) => {
    const total = productions
      .map((prod) => prod.Production)
      .reduce((a, b) => a + b);
    return total;
  };

```
   >합을 구하는 함수를 작성해 productions를 파라미터로 받아서 합을 리턴 하는 함수

   - 하우스를 동작시키는 함수 작성 해서 렌더링 시키기
```
  const HouseActive = (farmId: number, houseId: number) => {
    const newFarmList = farmList?.map((farm) =>
      farm.id === farmId
        ? {
            ...farm,
            houses: farm.houses?.map((house) =>
              house.id === houseId
                ? { ...house, active: !house.active }
                : { ...house }
            ),
          }
        : { ...farm }
    );
    setFarmList(newFarmList);
  };

```
>파라미터로 받은 farmId,houseId 와 선택한 농장의 일치 여부에 따라 active를 boolean 값으로 조작해서 state를 업데이트 시켜 화면을 렌더링 시킴 


### 4. UI 개발 (예시 이미지를 제공 후 구현)

   - Portal을 이용한 모달 구현하기 

   >부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법

   portal을 통해 독립적인 구조와 부모-자식 관계를 동시에 유지 한 후에 children을 이용해 재사용 가능한 모달 컴포넌트 구현

[참고 자료](https://ko.reactjs.org/docs/portals.html)
   - 요청 성공, 유효성 검사 실패시 모달 출력
>성공시 state에 결과 값을 넣어 작성 한 "농장명", "작물명"을 모달 창 출력

```
.then((data) => {
            setFarm(data.result);
            if (farm) {
              setIsModal(true);
            }
```
>useForm에 validation 유효성 검사 함수, setState를 매개변수로 받아 오류 발생시 모달 창 출력  


   - 수동으로 모달창 닫히는 버튼 추가 
   >Button 컴포넌트에 onClick 전달 해서 boolean 값으로 닫히게 만듬
## 느낀점 
1.useForm, Modal 제작

중복되는 코드를 줄이려고 많은 고민을 해왔고
재사용 가능한 컴포넌트의 중요성과 편리함을 다시 느낌


2.Portal을 이용한 모달 창 구현 

 과제를 하면서 처음 써보는 방식이라 공식 문서를 찾아 봤다.
 전에는 스타일링 속성에 제약을 받아 z-index 등으로 번거로운 과정이 있지만 부모-자식 관계를 유지하지만 독립적인 위치에서 렌더링 할 수 있는점이 편리했다.

## 준수 사항 

1. yarn + Next.js + ts 사용하여 개발합니다.
2. Style Library(SCSS, styled-components 등) 사용은 자율이지만 tailwind 를 기본코드로 제공합니다
3. 제공된 eslint 로 규약을 지켜야 합니다. (husky로 커밋을 제한 합니다.)
4. 제공되는 과제에 대한 저장소는 각 과제 순서대로 브랜치를 제작 후 머지하고 다시 브랜치를 만드는 과정으로 진행해야합니다. (브랜치는 삭제하지말고 유지해주세요)
