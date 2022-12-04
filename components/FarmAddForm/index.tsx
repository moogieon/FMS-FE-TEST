import React from "react";
import { Input, Button } from "components";
import useForm from "@components/hooks/UseFrom";
import FarmAddValidation, {
  IFarmData,
} from "@components/validation/FarmAddValidation";

const FarmAddForm = () => {
  /*TODO: Q2-2 API 통신 (Farm 의 문제를 다 끝내고 진행하셔도 무방합니다.)
    - api/addfarm 경로로 {name,crop} 값을 post 로 요청합니다.
    TODO: Q4 Portal 을 활용하여 모달을 구현합니다.
    - 위에서 호출된 결과 값을 화면에 출력 해야 합니다.
    - 예시는 이미지를 참고해 주세요
    TODO: Q4-1
    - 성공시 결과 값을 출력하는 구현해주세요
    TODO: Q4-2
    - 전달하는 값이 없을 경우 진행이 불가능하다는 모달을 출력해 주세요
    TODO: Q4-3
    - 각 모달에는 닫기 버튼을 추가하여 모달이 수동으로 닫혀야 합니다.
  */


  const { values,  handleChange, handleSubmit } = useForm({
    initialValues: { name: "", crops: "" },
    onSubmit: async (values: IFarmData) => {
      const { name, crops } = values;
      try {
        await fetch(`api/addfarm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            crops,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.result);
          });
      } catch (error) {
        alert("전송에 실패 했습니다.");
      }
    },
    validate: FarmAddValidation,
    
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 px-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span>농장명</span>
              <Input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <span>작물명</span>
              <Input
                name="crops"
                type="text"
                value={values.crops}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button>저장</Button>
        </div>
      </form>
    </>
  );
};

export default FarmAddForm;
