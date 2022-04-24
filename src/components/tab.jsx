import styled from '@emotion/styled';
import { useState } from 'react';

// TODO-GYU: 공통 컴포넌트 고려 및 적용
// data - 데이터 인자로 받을 수 있게 처리
// width - wrapper 사이즈를 조절 할 수 있도록
// 애니메이션 제대로 처리하기
export default function Tab() {
  const data = ['감자', '고구마', '카레라이스'];
  //   const data = ['감자', '고구마', '카레라이스', 'test'];
  //   const data = ['감자', '고구마', '카레라이스', 'test', '1', '2'];
  const width = '40rem';

  const [selectedLable, setSelectedLabel] = useState(data[0]);

  return (
    <Wrapper width={width}>
      {data.map((label, index) => (
        <Button
          key={`${label}-${index}`}
          selected={selectedLable === label}
          size={data.length}
          onClick={() => setSelectedLabel(label)}
        >
          {label || '-'}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div(({ width }) => ({
  margin: '0 auto',
  justifyContent: 'center',
  width,
}));

const Button = styled.button(({ selected, size }) => ({
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  padding: '.8rem',
  width: `${100 / size}%`,
  fontWeight: '900',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.6)',
  borderBottom: `2px solid ${selected ? '#39bcbc' : '#ebebeb'}`,
  transition: '0.4s ',
}));
