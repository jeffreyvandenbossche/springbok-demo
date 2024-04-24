import { html } from 'lit-html';
import { IconName } from '../../atoms/icon/icon.types';
import { InputType } from './form-input.types';
import { formDateTimeInputData, formEmailInputData, formNumberInputData, formTextInputData, formTextareaInputData, } from './form-input.data';
const meta = {
  title: 'components/molecules/bs-form-input',
  component: 'bs-form-input',
  argTypes: {
    icon: {
      control: 'select',
      options: Object.values(IconName),
    },
    type: {
      control: 'select',
      options: Object.values(InputType),
    },
    rows: {
      if: { arg: 'type', eq: InputType.Textarea },
    },
    resizeable: {
      if: { arg: 'type', eq: InputType.Textarea },
    },
  },
  args: formTextInputData,
};
export default meta;
export const Default = {
  render: (args) => html ` <bs-form-input
      name="${args.name}"
      type="${args.type}"
      label="${args.label}"
      icon="${args.icon}"
      required="${args.required}"
      min="${args.min}"
      max="${args.max}"
      required-message="${args.requiredMessage}"
      invalid-message="${args.invalidMessage}"
      value="${args.value}"
      rows="${args.rows}"
      resizeable="${args.resizeable}"
    />`,
};
export const Email = Object.assign(Object.assign({}, Default), { args: formEmailInputData });
export const Number = Object.assign(Object.assign({}, Default), { args: formNumberInputData });
export const Textarea = Object.assign(Object.assign({}, Default), { args: formTextareaInputData });
export const DateTime = Object.assign(Object.assign({}, Default), { args: formDateTimeInputData });
//# sourceMappingURL=form-input.stories.js.map
