export interface ReceivedMessage {
    socketId: string;
    username: string;
    message: string;
    time: string;
}

export type NewMassage = Omit<ReceivedMessage, "time">;
