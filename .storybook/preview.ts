import { Preview } from '@storybook/react';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      default: 'B200',
      values: [
        {
          name: 'B200',
          value: '#B7D9E4',
        },
        {
          name: 'W100',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
