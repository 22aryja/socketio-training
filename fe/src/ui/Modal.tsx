import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

export const Modal: FC<Props> = ({ children }) => {
    return createPortal(
        <main className="fixed inset-0 backdrop-blur-sm bg-black/60 z-50">
            <section className="flex w-full h-full justify-center items-center">
                {children}
            </section>
        </main>,

        document.getElementById("modal")!
    );
};
