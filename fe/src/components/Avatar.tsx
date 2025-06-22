import { useAvatar } from "@/hooks/useAvatar";
import { type FC } from "react";

interface Props {
    socketId: string;
    username: string;
}

export const Avatar: FC<Props> = ({ socketId, username }) => {
    const { bgClass, initials } = useAvatar(socketId, username);

    return (
        <span
            className={`flex rounded-full w-8 h-8 justify-center items-center ${bgClass}`}
        >
            {initials}
        </span>
    );
};

export default Avatar;
