export interface IUserData {
  id?: string;
  name?: string;
}
const Loginvalidate = ({ id, name }: IUserData) => {
  const errors: IUserData = {};

  if (!id) {
    errors.id = "아이디가 입력되지 않앗습니다.";
  } else if (id.length < 2) {
    errors.id = "아이디는 2자 이상입니다";
  }

  if (!name) {
    errors.name = "이름이 입력되지 않았습니다.";
  } else if (name.length < 2) {
    errors.name = "이름은 2자 이상입니다.";
  }

  return errors;
};
export default Loginvalidate;
