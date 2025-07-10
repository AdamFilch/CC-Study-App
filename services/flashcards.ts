import { create } from "zustand";

type FlashcardsStates = {
    show_first: 'definition' | 'term',
    flipped_randomly: boolean,
    shuffle: boolean,
    display_chapter_category: boolean,
    progress_tracker: boolean,
    endless: boolean,
    card_limit: string,
    topics: {
        chapter1: boolean,
        chapter2: boolean,
        chapter3: boolean,
        chapter4: boolean,
        chapter5: boolean,
    }
}

type FlashcardsActions = {

}

export const useFlashcardsStore = create<FlashcardsActions & FlashcardsStates>((set, get) => ({
    topics: {
        chapter1: true,
        chapter2: true,
        chapter3: true,
        chapter4: true,
        chapter5: true
    },
    show_first: 'definition',
    flipped_randomly: false,
    shuffle: true,
    display_chapter_category: true,
    progress_tracker: true,
    endless: false,
    card_limit: '50'
}))