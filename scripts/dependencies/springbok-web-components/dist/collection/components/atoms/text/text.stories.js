import { html } from 'lit-html';
import { TextColor, TextSize } from './text.types';
const meta = {
  title: 'components/atoms/bs-text',
  component: 'bs-text',
  argTypes: {
    text: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(TextSize),
    },
  },
  args: {
    size: TextSize.Default,
    text: `<p style="text-align: justify;"><a href="#anchor">Anchor Text</a>&nbsp;This text is <b>bold</b>, <i>italic</i>,&nbsp;<u>underlined.</u></p>
    <p>This is copied text!</p>
    <p><img src="https://www.bridgestone.co.uk/content/dam/website/bridgestone_jss/images/components/rich-text/icons/BS_S23_Electric-Vehicle-Ready_K.svg" alt="ENLITEN logo" width="40" _rte_src="/content/dam/website/bridgestone_jss/images/components/rich-text/icons/BS_S23_Electric-Vehicle-Ready_K.svg">&nbsp; &nbsp;Electric vehicle ready:&nbsp;tyre designed to meet the specific requirements of electric vehicles</p>
    <p><b>This is pasted text<br>maintaining its formatting.</b></p>
    <p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p><a></a>Following bullet options available:®™</p>
    <ul>
    <li>Item 1<ul>
    <li>Sub-item<ul>
    <li>Sub sub item</li>
    </ul>
    </li>
    </ul>
    </li>
    <li>Item 2</li>
    </ul>
    <p id="anchor"> Numbered List:</p>
    <ol>
    <li style="text-align: left;">Item1</li>
    <li style="text-align: left;">Item2</li>
    <li style="text-align: left;">Item3<ol>
    <li style="text-align: left;">Sub-item 1</li>
    <li style="text-align: left;">Sub-item 2</li>
    <li style="text-align: left;">Sub-item 3</li>
    </ol>
    </li>
    </ol>
    <p style="text-align: justify;">Options with a subscript<sub>1</sub> and superscript<sup>2</sup>, links to <a title="Google Website" href="https://www.google.com" target="_blank">pages</a></p>
    <pre>
    This is preformatted text.
    <p style="text-align: justify;">&nbsp;</p>
    <p style="text-align: center;">Middle aligned</p>
    <p style="text-align: right;">Right aligned</p>
    <p style="text-align: left;">Some special items™®€©</p>
    <p style="text-align: left;">
    Some text with an
          <bs-tooltip title-text="Soil compaction." content-text="Praesent at est luctus, efficitur ante vitae, congue diam. Donec interdum condimentum mauris lorem ipsum.">
        soil compaction
      </bs-tooltip>
       that explains it</p>
    <p>&nbsp;</p>`,
    textColor: TextColor.Black,
  },
};
export default meta;
export const Default = {
  render: (args) => html `<bs-text
      size="${args.size}"
      text="${args.text}"
      text-color="${args.textColor}"
    ></bs-text>`,
};
//# sourceMappingURL=text.stories.js.map
