import { html } from 'lit-html';
import { experienceZoneStoryData } from './experience-zone-story.data';
const meta = {
  title: 'components/molecules/bs-experience-zone-story',
  component: 'bs-experience-zone-story',
  args: experienceZoneStoryData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/X7O6IfbbCiomyPkEUfVpvg/BS---04-ORGANISMS?type=design&node-id=283-725&mode=dev',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-experience-zone-story
      story-data="${JSON.stringify(args.storyData)}"
    ></bs-experience-zone-story>
  `,
};
//# sourceMappingURL=experience-zone-story.stories.js.map
