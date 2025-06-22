const bgs: string[] = [
    "bg-emerald-700",
    "bg-cyan-700",
    "bg-indigo-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-lime-700",
    "bg-amber-700",
    "bg-red-700",
];

const generateRandomColor = (): string => {
    const index: number = Math.floor(Math.random() * bgs.length);
    const bgClass: string = bgs[index];
    return bgClass;
};

export const useAvatar = (
    id: string,
    username: string
): { bgClass: string; initials: string } => {
    // const savedUsers: Record<string, string> = {};

    // if (Object.keys(savedUsers).some((socketId) => socketId === id)) {
    // } else {
    // }

    const applyLetters = (): string => {
        const split: string[] = username.trim().split(" ");
        const firstLetter: string = split[0][0];
        const secondLetter: string =
            split.length > 1
                ? split[1][0]
                : split[0].length > 1
                ? split[0][1]
                : "";
        return firstLetter + secondLetter;
    };

    return { bgClass: generateRandomColor(), initials: applyLetters() };
};
