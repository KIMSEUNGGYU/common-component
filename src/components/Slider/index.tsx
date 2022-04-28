import { ChangeEvent, useState } from 'react';

import * as S from './styles';

// TODO-GYU: UI 업데이트 (0%, 25% ... 동그라미)

export type SliderProps = {
  /** 슬라이더의 초기 값 */
  initialValue: string;
  /** 슬라이더의 전체 너비 */
  width?: string;
  /** 슬라이더 메인 컬러 */
  color?: string;
  /** 슬라이더의 라벨 아이템 */
  items?: string[];
};

export default function Slider({
  initialValue,
  width = '100%',
  color = '#39bcbc',
  items = [],
}: SliderProps) {
  const [sliderValue, setSliderValue] = useState(initialValue);

  const hanldeChangeSliderValue = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setSliderValue(target.value);

  return (
    <S.Wrapper width={width}>
      <h3>{sliderValue}%</h3>
      <S.SliderWrapper>
        <S.Slider
          type="range"
          value={sliderValue}
          color={color}
          onChange={hanldeChangeSliderValue}
        />
        {Array.isArray(items) && (
          <S.Labels>
            {items?.map((item) => (
              <>
                <S.Label value={item} color={color} onClick={() => setSliderValue(item)}>
                  {item}%
                </S.Label>
              </>
            ))}
          </S.Labels>
        )}
      </S.SliderWrapper>
    </S.Wrapper>
  );
}

Slider.defaultProps = {
  width: '100%',
  color: '#39bcbc',
  items: [],
};
