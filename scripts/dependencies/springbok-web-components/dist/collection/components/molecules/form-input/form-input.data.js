import { IconName } from '../../atoms/icon/icon.types';
import { InputType } from './form-input.types';
export const formTextInputData = {
  required: true,
  min: '3',
  max: '10',
  requiredMessage: 'The name field is required.',
  invalidMessage: 'The provided name should be between 3 and 10 characters long.',
  label: 'Name',
  name: 'name',
  type: InputType.Text,
};
export const formNumberInputData = {
  required: true,
  min: '12',
  max: '18',
  requiredMessage: 'The age field is required.',
  invalidMessage: 'The provided age value should be between 12 and 18.',
  label: 'Age',
  name: 'age',
  type: InputType.Number,
};
export const formEmailInputData = {
  required: true,
  min: '5',
  max: '',
  requiredMessage: 'The email field is required.',
  invalidMessage: 'This should be a valid email.',
  label: 'Email',
  name: 'email',
  type: InputType.Email,
};
export const formTextareaInputData = {
  required: false,
  min: '10',
  max: '255',
  requiredMessage: 'The checkbox is required.',
  invalidMessage: 'The question field should be between 10 and 255 characters long.',
  icon: IconName.CaretDownward,
  label: 'Please ask you question.',
  name: 'question',
  type: InputType.Textarea,
  rows: 3,
  resizeable: true,
};
export const formDateTimeInputData = {
  required: true,
  min: '2023-08-12T12:00',
  max: '2023-08-21T14:00',
  requiredMessage: 'This field is required',
  invalidMessage: 'DateTime should be between provided dateTime values.',
  icon: IconName.CaretDownward,
  label: 'Fill in your preferred appointment date and time.',
  name: 'appointment',
  type: InputType.DateTime,
};
//# sourceMappingURL=form-input.data.js.map
