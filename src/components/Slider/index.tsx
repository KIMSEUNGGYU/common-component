import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

// TODO-GYU: 공통 컴포넌트 요소
// initialValue, labelItems
// 요소 스타일 초기 적용하기

// UI 업데이트 (0%, 25% ... 동그라미)

const initialValue = '50';
const items = ['1', '25', '50', '75', '100'];
// const items = ['1', '5', '10', '75', '100'];

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(initialValue);

  const hanldeChangeSliderValue = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSliderValue(target.value);

  return (
    <Wrapper>
      <h3>{sliderValue}%</h3>
      <SliderWrapper>
        <SSlider
          type="range"
          name=""
          id=""
          value={sliderValue}
          onChange={hanldeChangeSliderValue}
        />
        <Labels>
          {items.map((item) => (
            <>
              <Label value={item} onClick={() => setSliderValue(item)}>
                {item}%
              </Label>
            </>
          ))}
        </Labels>
      </SliderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 3rem;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const SSlider = styled.input(({ value }) => ({
  WebkitAppearance: 'none',
  position: 'relative',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',

  '&::-webkit-slider-runnable-track': {
    WebkitAppearance: 'none',
    height: '5px',
    background: `linear-gradient(to right, #39bcbc 0%, #39bcbc ${value}%, rgba(0, 0, 0, 0.1) 0)`,
  },

  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    background: 'transparent',
    width: '1.5rem',
    height: '1.5rem',
    border: '3px solid white',
    borderRadius: '50%',
    backgroundColor: '#39bcbc',
    position: 'absolute',
    top: '-8px',
    left: `calc(${value}%)`,
    cursor: 'pointer',
  },
}));

const Labels = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Label = styled.button(({ value }) => ({
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
    backgroundColor: '#39bcbc',
    color: 'white',
  },
}));
