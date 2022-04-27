import styled from '@emotion/styled';

import Toggle from './components/Toggle';
import Tab from './components/Tab';

function App() {
  return (
    <Wrapper>
      <h1>TEST</h1>
      <ComponentWrapper>
        <h3>1. toggle</h3>
        <Toggle
          items={[
            { label: '테스트1', onClick: () => console.log('클릭1') },
            { label: '테스트2', onClick: () => console.log('클릭2') },
          ]}
        />
      </ComponentWrapper>
      <ComponentWrapper>
        <h3>2. toggle</h3>
        <Tab data={['감자', '고구마', '카레라이스']} width={'70%'} />
      </ComponentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div(() => ({
  padding: '2rem',
}));

const ComponentWrapper = styled.div(() => ({
  marign: '0 auto',
  height: '8rem',
  borderBottom: '1px solid #ebebeb',
}));

export default App;
