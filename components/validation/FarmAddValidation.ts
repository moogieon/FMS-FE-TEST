export interface IFarmData {
  name?: string;
  crops?: string;
  all?: string;
}
const LoginValidation = ({ name, crops }: IFarmData) => {
  const errors: IFarmData = {};

  if (!name && !crops) {
    errors.all = "정보가 입력 되지 않았습니다.";
  } else if (!name) {
    errors.all = "농장명을 입력하세요!";
  } else if (!crops) {
    errors.all = "작물을 입력하세요!";
  }

  return errors;
};
export default LoginValidation;
