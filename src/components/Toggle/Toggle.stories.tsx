import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from '.';

// TODO: 이벤트 클릭시 actions 호출하는 방법 찾아보기
export default {
  title: 'Common/Toggle',
  component: Toggle,
  args: {
    items: [{ label: '테스트1' }, { label: '테스트2' }],
  },

  // Event handler 감지
  // parameters: {
  //   actions: {
  //     handles: ['click button'],
  //     // handles: ['mouseover', 'click .btn'],
  //   },
  // },
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = (args) => {
  args.items = [{ label: '메뉴1' }, { label: '메뉴2' }];

  return <Toggle {...args} />;
};

export const WithClickHanlder: ComponentStory<typeof Toggle> = (args) => {
  args.items = [
    { label: '메뉴1', onClick: () => console.log('클릭 메뉴1') },
    { label: '메뉴2', onClick: () => console.log('클릭 메뉴2') },
  ];

  return <Toggle {...args} />;
};
