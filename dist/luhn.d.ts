export default function createLuhn(): {
    validate: (pan: string) => boolean;
};
