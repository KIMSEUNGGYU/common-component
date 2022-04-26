import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tab from './';

export default {
  title: 'Common/Tab',
  component: Tab,
  // 해당 컴포넌트의 인자로 주어질 정보들을 정의 및 인자 정보의 타입들도 지정하여
  // storybook 에서 radio, color UI 사용할 수 있도록 지정??
  argTypes: {},
  args: {
    // args 로 기본으로 전달되는 값을 정의하고 싶을 때 사용 가능
    // 🐛 data 를 설정해주지 않으면 {} 로 읽어 타입이 맞지 않아 오류발생하여 args 설정
    data: [],
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: ['감자', '고구마', '카레라이스'],
};

// 스토리북 부분을 function 으로도 처리 가능
// THINK❓ - NoData 시 data=[] 인 경우 아무것도 안나오는데 이런 경우 어떻게 로직적으로 처리해야할까?
export const NoData: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} />;
};
