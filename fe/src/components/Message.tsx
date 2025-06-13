import type { FC } from "react";

interface Props {
    message: string;
    time: Date;
}

const Message: FC<Props> = ({ message, time }) => {
    const extractTime = (date: Date): string => {
        return date.toISOString().split("T")[1].split(".")[0];
    };

    return (
        <div className="bg-[#222] flex flex-col px-8 py-2 rounded-full w-fit">
            <h1 className="font-semibold">You: </h1>
            <h2 className="flex">{message}</h2>
            <h3 className="text-[#ffffff62] text-sm">at {extractTime(time)}</h3>
        </div>
    );
};

export default Message;
