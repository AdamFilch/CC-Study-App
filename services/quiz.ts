import { create } from 'zustand'


type quizStates = {
    topics: {
        chapter1: boolean,
        chapter2: boolean,
        chapter3: boolean,
        chapter4: boolean
    }
    total_questions: string,
    passing_score: string,
    timer: string
    timer_type: 'per_question' | 'full_time',
    no_timer: boolean,
    reveal_type: 'every_step' | 'completion',
    progress_tracker: boolean,
}

type quizActions = {

}

const useQuizStore = create<quizStates & quizActions>((set, get) => ({
    topics: {
        chapter1: false,
        chapter2: false,
        chapter3: false,
        chapter4: false,
    },
    total_questions: '100',
    passing_score: '70',
    timer: '120',
    timer_type: 'full_time',
    no_timer: false,
    reveal_type: 'every_step',
    progress_tracker: true

    



}))