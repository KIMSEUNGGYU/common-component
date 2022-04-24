import styled from '@emotion/styled';

import Toggle from './components/toggle';

function App() {
  return (
    <div>
      <h1>TEST</h1>
      <ComponentWrapper>
        <h3>1. toggle</h3>
        <Toggle />
      </ComponentWrapper>
    </div>
  );
}

const ComponentWrapper = styled.div(() => ({
  marign: '0 auto',
  height: '8rem',
  borderBottom: '1px solid #ebebeb',
}));

export default App;
