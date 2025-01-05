import { create } from "zustand";

type State = {
    isVisible: boolean;
}

type Action = {
    setIsVisible: () => void;
}

export const useSidebarStore = create<State & Action>((set) => ({
    isVisible: false,

    setIsVisible: () => set(state => ({isVisible: !state.isVisible})),
}))