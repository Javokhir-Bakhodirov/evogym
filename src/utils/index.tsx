import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <div className="max-w-5/6 mx-auto py-[20px] min-sm:px-[20px] px-[50px]">
            {children}
        </div>
    );
};

export default Container;
