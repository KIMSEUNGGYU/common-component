import { useState } from 'react';

import * as S from './styles';

// TODO-GYU: 공통 컴포넌트 고려 및 적용
// 애니메이션 제대로 처리하기
export type TabProps = {
  /** Tab에 요소 */
  data: string[];
  /** 탭의 전체 사이즈 */
  width?: string;
  /** Tab의 요소 선택시 하이라이트 색상 */
  activeColor?: string;
};

export default function Tab({ data, width, activeColor }: TabProps) {
  const [selectedLable, setSelectedLabel] = useState(data[0]);

  return (
    <S.Wrapper width={width || '100%'}>
      {data.map((label, index) => (
        <S.Button
          key={`${label}-${index}`}
          selected={selectedLable === label}
          size={data.length}
          activeColor={activeColor || '#39bcbc'}
          onClick={() => setSelectedLabel(label)}
        >
          {label || '-'}
        </S.Button>
      ))}
    </S.Wrapper>
  );
}

Tab.defaultProps = {
  width: '100%',
  activeColor: '#39bcbc',
};
