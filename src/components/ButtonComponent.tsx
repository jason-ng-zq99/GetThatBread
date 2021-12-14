import { StyledButton } from "./styles/ButtonComponent.styled";

type Props = {
  content: string;
};

export default function Button(prop: Props) {
  return <StyledButton>{prop.content}</StyledButton>;
}
