export const ButtonVariations = {
    DEFAULT_BUTTON: 'DEFAULT_BUTTON',
    CIRCLE_BUTTON: 'CIRCLE_BUTTON',
} as const;

export type ButtonVariation = typeof ButtonVariations[keyof typeof ButtonVariations];