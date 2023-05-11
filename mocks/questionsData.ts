// categories.ts
interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {id: 1, name: 'JavaScript'},
  {id: 2, name: 'TypeScript'},
  {id: 3, name: 'React'},
  {id: 4, name: 'React Native'},
];

export default categories;

// questions.ts
interface Question {
  category: string;
  text: string;
}

export const questions: Question[] = [
  {category: 'JavaScript', text: 'What is hoisting in JavaScript?'},
  {category: 'JavaScript', text: 'What is closure in JavaScript?'},
  {category: 'TypeScript', text: 'What is TypeScript?'},
  {category: 'TypeScript', text: 'What are the benefits of using TypeScript?'},
  {category: 'React', text: 'What is React?'},
  {
    category: 'React',
    text: 'What are the differences between props and state in React?',
  },
];
