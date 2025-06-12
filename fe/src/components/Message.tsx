import type { FC } from "react";

interface Props {
    message: string;
}

const Message: FC<Props> = ({ message }) => {
    return (
        <div className="bg-[#222] flex flex-col px-8 py-2 rounded-full w-fit">
            <h1 className="font-semibold">You: </h1>
            <h2 className="flex">{message}</h2>
        </div>
    );
};

export default Message;
