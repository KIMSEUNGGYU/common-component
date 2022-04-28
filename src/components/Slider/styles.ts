import styled from '@emotion/styled';

// export const Wrapper = styled.div`
//   padding: 1rem 3rem;
// `;

export const Wrapper = styled.div(({ width }: { width: string }) => ({
  padding: '1rem 3rem',
  boxSizing: 'border-box',
  width,
}));

export const SliderWrapper = styled.div`
  position: relative;
`;

export const Slider = styled.input(({ value, color }) => ({
  WebkitAppearance: 'none',
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  width: '100%',

  '&::-webkit-slider-runnable-track': {
    WebkitAppearance: 'none',
    height: '5px',
    background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, rgba(0, 0, 0, 0.1) 0)`,
  },

  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    background: 'transparent',
    width: '1.5rem',
    height: '1.5rem',
    border: '3px solid white',
    borderRadius: '50%',
    backgroundColor: `${color}`,
    position: 'absolute',
    top: '-8px',
    left: `calc(${value}%)`,
    cursor: 'pointer',
  },
}));

export const Labels = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Label = styled.button(({ value, color }) => ({
  outline: 'none',
  border: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  color: 'rgba(0, 0, 0, 0.25)',
  fontWeight: 600,
  padding: '0.3rem 0.7rem',
  borderRadius: '10px',
  position: 'absolute',
  left: `calc(${value}% - 20px)`,
  '&:hover': {
    backgroundColor: `${color}`,
    color: 'white',
  },
}));
