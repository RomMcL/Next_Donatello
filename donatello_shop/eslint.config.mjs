import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: ['error'], // точка с запятой. ["error", "never"] - без них.
      quotes: ['error', 'single'], // тип кавычек - одинарные. ["error", "double"] - для дойных
      indent: ['error', 2], // размер отступов
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }], // максимум 1 пустые строкa
      'no-trailing-spaces': [2, { skipBlankLines: false }], // убрать пробелы в конце строки
      'object-curly-spacing': ['error', 'always'], // пробелы в начале и конце {}
      'comma-spacing': [2, { before: false, after: true }], // пробелы вокруг запятых
      'arrow-spacing': ['error', { before: true, after: true }], // пробелы вокруг =>
      'space-infix-ops': ['error', { int32Hint: false }], // пробелы вокруг математических операторов
      'keyword-spacing': [2, { before: true, after: true }], // пробелы вокруг ключевых слов
      'arrow-body-style': ['error', 'as-needed'], // необходимость {} для тела стрелочной функции
      'padded-blocks': ['error', 'never'], // пустые строки в начале и конце блоков и функций
      'max-len': ['error', { code: 120 }], // максимальная длина строки
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ], // закрывает теги в JSX, если нет потомка
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // пробел перед закрывающим тегом в JSX

      'prefer-template': ['error'], // литералы вместо конкатенации строк
      // eslint-disable-next-line max-len
      'prefer-arrow-callback': ['error'], // стрелочные вместо function, используемых в качестве обратных вызовов или аргументов функций
    },
  }),
];

export default eslintConfig;
