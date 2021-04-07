const questions = [
  {
    question: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    answer: 'React.createElement()',
    id: 'q1',
  },
  {
    question: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    answer: 'import Component from "./Component"',
    id: 'q2',
  },
  {
    question: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    answer: 'useFetch()',
    id: 'q3',
  },
  {
    question: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    answer: 'use',
    id: 'q4',
  },
  {
    question:
      'Qual é o hook utilizado para memorizar a declaração de uma função?',
    options: ['useMemo', 'useCallback', 'useReducer'],
    answer: 'useCallback',
    id: 'q5',
  },
];

export default questions;
