// ❓ THINK - Toggle 컴포넌트 하위 요소로 Label 을 통해 등록할 수 있도록 할 수 있을듯??
// https://ant.design/components/menu/ (참고)

import { useState } from 'react';

import * as S from './styles';

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  // return (
  //   // <S.Wrapper>
  //   //   <Toggle.Label toggle={toggle} onClick={() => setToggle(true)}>
  //   //     테스트1
  //   //   </Toggle.Label>
  //   //   <Toggle.Label toggle={!toggle} onClick={() => setToggle(false)}>
  //   //     테스트2
  //   //   </Toggle.Label>
  //   // </S.Wrapper>
  // );
}

Toggle.Label = S.Button;

// typeof Toggle;
// export default Toggle;

// export default function Toggle({ Label }: any) {
//   const [toggle, setToggle] = useState(true);

//   Label = S.Button;

//   return (
//     <S.Wrapper>
//       <Label toggle={toggle} onClick={() => setToggle(true)}>
//         테스트1
//       </Label>
//       <Label toggle={!toggle} onClick={() => setToggle(false)}>
//         테스트2
//       </Label>
//     </S.Wrapper>
//   );
// }
