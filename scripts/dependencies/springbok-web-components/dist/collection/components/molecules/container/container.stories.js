import { html } from 'lit-html';
const meta = {
  title: 'components/molecules/bs-container',
  component: 'bs-container',
  args: {
    contained: true,
    mobileFullWidth: true,
  },
  argTypes: {
    contained: {
      control: 'boolean',
    },
    mobileFullWidth: {
      control: 'boolean',
    },
  },
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-container contained="${args.contained}" mobile-full-width="${args.mobileFullWidth}">
      <bs-quote
        text="Lorem ipsum dolor sit amet consectetur. Venenatis eget nunc amet placerat feugiat. Nullam id dictumst amet porta consectetur aliquet dui dictumst. Placerat nibh hendrerit."
        author-image='{"src":"/images/author.jpg","width":640,"height":930}'
        author-name="Jane Doe"
        author-position="Job title at company"
        source="https://www.goodreads.com/quotes/36560-to-be-or-not-to-be-that-is-the-question"
      >
      </bs-quote>
    </bs-container>`,
};
//# sourceMappingURL=container.stories.js.map
