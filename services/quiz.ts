import { create } from 'zustand'


type QuizStates = {
    topics: {
        chapter1: boolean,
        chapter2: boolean,
        chapter3: boolean,
        chapter4: boolean,
        chapter5: boolean
    }
    total_questions: string,
    passing_score: string,
    timer: string
    timer_type: 'per_question' | 'full_time',
    no_timer: boolean,
    reveal_type: 'every_step' | 'completion',
    progress_tracker: boolean,
}

type QuizActions = {
    setField<K extends keyof Omit<QuizStates, "topics">>(key: K, value: QuizStates[K]): void;
    setTopic: (chapter: keyof QuizStates["topics"], value: boolean) => void;
};

export const useQuizStore = create<QuizStates & QuizActions>((set, get) => ({
    topics: {
        chapter1: true,
        chapter2: true,
        chapter3: true,
        chapter4: true,
        chapter5: true
    },
    total_questions: '100',
    passing_score: '70',
    timer: '120',
    timer_type: 'full_time',
    no_timer: false,
    reveal_type: 'every_step',
    progress_tracker: true,

    setField: (key, value) => set(state => ({
        ...state,
        [key]: value
    })),

    setTopic: (chapter, value) => set(state => ({
        topics: {
            ...state.topics,
            [chapter]: value
        }
    }))
}))