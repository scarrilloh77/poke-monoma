import * as SC from './button.styles';

interface IButton {
  children: JSX.Element | string;
  type: 'button' | 'submit';
  bgColor?: string;
  fontSize?: string;
  padding?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  bgColor,
  fontSize,
  padding,
  type,
  onClick,
}: IButton) => {
  return (
    <SC.BtnWrap
      type={type}
      bgColor={bgColor}
      padding={padding}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </SC.BtnWrap>
  );
};
