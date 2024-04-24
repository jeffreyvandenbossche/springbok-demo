import { html } from 'lit-html';
import { experienceZoneData } from './experience-zone-modal.data';
const meta = {
  title: 'components/molecules/bs-experience-zone-modal',
  component: 'bs-experience-zone-modal',
  args: experienceZoneData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=283-725&mode=dev',
    },
    layout: 'fullscreen',
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-experience-zone-modal
      experience-zone-data="${JSON.stringify(args.experienceZoneData)}"
    ></bs-experience-zone-modal>
  `,
};
//# sourceMappingURL=experience-zone-modal.stories.js.map
