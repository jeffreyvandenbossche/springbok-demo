import { TitleColor, TitleSize, TitleTag, TitleVariant } from '../../atoms/title/title.types';
export const accordionData = {
  mainTitle: {
    tag: TitleTag.H2,
    text: 'Frequently asked questions',
    variant: TitleVariant.Dash,
    color: TitleColor.Black,
    size: TitleSize.Head2,
  },
};
export const accordionStory = {
  stories: [
    {
      accordionItemId: 'correct-pressure',
      accordionItemTitle: 'What is the correct pressure for my tyres?',
      accordionItemText: 'Correct tyre pressure is important not only for safety, but also for fuel efficiency. It is measured in Bar, as well as pounds square inch (PSI), and you can find the correct information for your vehicle in the manufacturer’s handbook. In many cars, these details are also inside the rim of the driver’s door (and sometimes on the petrol cap).',
    },
    {
      accordionItemId: 'minimum-tread-depth',
      accordionItemTitle: 'What is the legal minimum tread depth for vehicle tyres?',
      accordionItemText: 'Having worn tyres means the only contact patch between you and the road is past its best. You could almost call it an accident waiting to happen. If the safety risks don’t hit home, maybe the risk of a £2,500 fine and three penalty points for a worn tyre will? That’s per tyre, too. If all four tyres are worn below the legal limit, you could potentially lose your licence and face a £10,000 fine.',
    },
  ],
};
//# sourceMappingURL=accordion.data.js.map
