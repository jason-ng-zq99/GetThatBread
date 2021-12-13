import react from "React";
import { StyledInput } from "./styles/InputComponent.styled";

type Props = {
  type: string;
  placeholder: string;
};

export default function Input(prop: Props) {
  return <StyledInput type={prop.type} placeholder={prop.placeholder} />;
}
