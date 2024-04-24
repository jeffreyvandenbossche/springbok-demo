import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { experienceZoneTeaserData } from './experience-zone.data';
import { ColorTheme } from '../../layouts/default-layout/default-layout.types';
const meta = {
  title: 'components/molecules/bs-experience-zone',
  component: 'bs-experience-zone',
  args: experienceZoneTeaserData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=323-314&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-default-layout theme="${ColorTheme.Light}">
      <bs-container contained>
        <bs-experience-zone
          experience-zone-data="${JSON.stringify(args.experienceZoneData)}"
          teaser-title="${JSON.stringify(args.teaserTitle)}"
          @bsClickAction=${action('bsClickAction')}
        />
      </bs-container>
    </bs-default-layout>
  `,
};
//# sourceMappingURL=experience-zone.stories.js.map
