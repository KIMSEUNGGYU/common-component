import { useState } from 'react';

import * as S from './styles';

type Label = {
  label: string;
  onClick?: () => void;
};

export type ToggleProps = {
  /** Tab에 요소 - 2개 요소 */
  items: [Label, Label];
  /** 탭의 전체 사이즈 */
  width?: string;
};

export default function Toggle({ items, width = '200px' }: ToggleProps) {
  const [toggle, setToggle] = useState(true);

  return (
    <S.Wrapper width={width}>
      <S.Button
        toggle={toggle}
        onClick={() => {
          setToggle(true);
          items[0].onClick && items[0].onClick();
        }}
      >
        {items[0].label}
      </S.Button>
      <S.Button
        toggle={!toggle}
        onClick={() => {
          setToggle(false);
          items[1].onClick && items[1].onClick();
        }}
      >
        {items[1].label}
      </S.Button>
    </S.Wrapper>
  );
}
