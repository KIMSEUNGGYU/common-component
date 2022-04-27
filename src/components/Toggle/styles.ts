import styled from '@emotion/styled';

const Wrapper = styled.div(({ width }: { width: string }) => ({
  margin: '0 auto',
  backgroundColor: '#ebebeb',
  width: width,
  borderRadius: '20px',
  border: '1px solid #ebebeb',
  borderColor: '#ebebeb',
  display: 'flex',
  justifyContent: 'center',
}));

const Button = styled.button(({ toggle }: { toggle: boolean }) => ({
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

export { Wrapper, Button };
