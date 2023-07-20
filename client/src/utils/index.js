import { surpriseMePrompts } from '../constants'

export function getRanomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRanomPrompt(prompt);
    return randomPrompt;
}
