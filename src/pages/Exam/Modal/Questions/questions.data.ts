import i18n from 'i18n';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { IQuestion } from '.';

export const DEFAULT_QUESTION: IQuestion = {
  title: '',
  type: 'long_text',
  validations: {
    required: true,
  },
};

export const ACCEPTED_QUESTION_TYPES = [
  {
    title: i18n.t('EXAM.QUESTION.TYPE.DISSERTATION_TYPE'),
    type: 'long_text',
    icon: BsReverseLayoutTextSidebarReverse,
  },
];
