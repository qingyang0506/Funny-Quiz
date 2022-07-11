import { shuffleArray } from './utils';
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };


export const fetchQuizQuestions = async (amount: number, difficulty: string,category:number):Promise<QuestionState[]> => {
    const p = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple&difficulty=${difficulty}`);
    const data = await p.json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers,question.correct_answer]),
    }));
}
