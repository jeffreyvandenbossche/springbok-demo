import { html } from 'lit-html';
import { experienceZoneScreenOneData, experienceZoneScreenTwoData, experienceZoneScreenThreeData, } from './experience-zone-screen.data';
import { ExperienceZoneLayout } from '../experience-zone/experience-zone.types';
const meta = {
  title: 'components/molecules/bs-experience-zone-screen',
  component: 'bs-experience-zone-screen',
  args: experienceZoneScreenOneData,
  argTypes: {
    layout: {
      control: 'select',
      options: [...Object.values(ExperienceZoneLayout)],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=160-62&mode=design&t=bzFoaXJOrx3w5zhA-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-experience-zone-screen
      slot="media"
      layout="${args.layout}"
      disclaimer="${args.disclaimer}"
      components="${JSON.stringify(args.components)}"
    ></bs-experience-zone-screen>
  `,
};
export const One = Object.assign(Object.assign({}, Default), { args: experienceZoneScreenOneData });
export const Two = Object.assign(Object.assign({}, Default), { args: experienceZoneScreenTwoData });
export const Three = Object.assign(Object.assign({}, Default), { args: experienceZoneScreenThreeData });
//# sourceMappingURL=experience-zone-screen.stories.js.map
