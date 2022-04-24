import { useState } from 'react';

import styled from '@emotion/styled';

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <Wrapper>
      <Button toggle={toggle} onClick={() => setToggle(true)}>
        테스트1
      </Button>
      <Button toggle={!toggle} onClick={() => setToggle(false)}>
        테스트2
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => ({
  margin: '0 auto',
  backgroundColor: '#ebebeb',
  width: '200px',
  borderRadius: '20px',
  border: '1px solid #ebebeb',
  borderColor: '#ebebeb',
}));

const Button = styled.button(({ toggle }) => ({
  padding: '0.5rem',
  width: '50%',
  borderRadius: '20px',
  backgroundColor: toggle ? 'white' : 'inherit',
  border: 'none',
  fontWeight: '900',
  color: 'rgba(0, 0, 0, 0.7)',
  borderColor: '#ebebeb',
  cursor: 'pointer',
  transition: '0.4s linear',
}));
