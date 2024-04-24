import { html } from 'lit-html';
import { testBadgeCardData, testBadgeCardData2 } from './test-badge-card.data';
const meta = {
  title: 'components/molecules/bs-test-badge-card',
  component: 'bs-test-badge-card',
  args: testBadgeCardData,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BFPKrznb7NlfArAYGYrh5F/BS---03-MOLECULES?type=design&node-id=212-63&mode=design&t=LwBOI08cDVEv9pNM-4',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html `
    <bs-test-badge-card
      card-title="${args.cardTitle}"
      card-text="${args.cardText}"
      card-image="${JSON.stringify(args.cardImage)}"
    />
  `,
};
export const Landscape = Object.assign(Object.assign({}, Default), { args: testBadgeCardData2 });
//# sourceMappingURL=test-badge-card.stories.js.map
