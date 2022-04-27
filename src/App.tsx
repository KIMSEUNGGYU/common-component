import styled from '@emotion/styled';

// import Toggle from './components/toggle';
import Tab from './components/Tab';

function App() {
  return (
    <Wrapper>
      <h1>TEST</h1>
      {/* <ComponentWrapper>
        <h3>1. toggle</h3>
        <Toggle />
      </ComponentWrapper> */}
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
