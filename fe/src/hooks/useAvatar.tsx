type Avatar = { bgClass: string; initials: string };

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

const savedUsers: Record<string, Avatar> = {};

const generateRandomColor = (): string => {
    const index: number = Math.floor(Math.random() * bgs.length);
    const bgClass: string = bgs[index];
    return bgClass;
};

const generateLetters = (username: string) => {
    const split: string[] = username.trim().split(" ");
    const firstLetter: string = split[0][0];
    const secondLetter: string =
        split.length > 1 ? split[1][0] : split[0].length > 1 ? split[0][1] : "";
    return firstLetter + secondLetter;
};

export const useAvatar = (id: string, username: string): Avatar => {
    if (savedUsers[id]) {
        return savedUsers[id];
    } else {
        savedUsers[id] = {
            bgClass: generateRandomColor(),
            initials: generateLetters(username),
        };
        return savedUsers[id];
    }
};
