import { atom } from 'jotai'

export const pageAtom = atom<
    "" |
    "work" |
    "about" |
    "lab" |
    "blog" |
    "services" |
    "contact" |
    "download" |
    "project"
>("");