import type { Question } from '../models/Question.js';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    console.log("this is where I am!!!")
    const response = await fetch('/api/questions/random', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    console.log("did I get here" +JSON.stringify(response));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
