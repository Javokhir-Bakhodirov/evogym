import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { SelectedPage } from "@/types";
import { log } from "console";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const linkStyles = cva(["transition-color", "duration-300"], {
    variants: {
        variant: {
            default: ["text-gray-500"],
            link: ["hover:text-primary-300 font-bold underline-offset-2"],
            btn: [
                "bg-secondary-500",
                "hover:bg-gray-500",
                "text-gray-500",
                "hover:text-secondary-400",
                "px-6",
                "py-[9px]",
                "border-lg",
                "rounded-lg",
            ],
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

type LinkProps = (VariantProps<typeof linkStyles> & ComponentProps<"a">) & {
    href: SelectedPage | string;
    page?: string;
    selectedPage?: SelectedPage;
    setSelectedPage?: (value: SelectedPage) => void;
};

export function Link({
    page,
    variant,
    className,
    href,
    selectedPage,
    setSelectedPage,
    ...props
}: LinkProps) {
    const isSelected = selectedPage == href;

    return (
        <AnchorLink
            onClick={() =>
                setSelectedPage && setSelectedPage(href as SelectedPage)
            }
            href={`#${href}`}
            {...props}
            className={twMerge(
                linkStyles({ variant }),
                isSelected ? "text-primary-500 font-bold" : "",
                className
            )}
        />
    );
}

type ButtonProps = VariantProps<typeof linkStyles> &
    ComponentProps<"button"> & {
        setSelectedPage?: (value: SelectedPage) => void;
    };

export function Button({
    variant,
    setSelectedPage,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            onClick={() => {
                setSelectedPage && setSelectedPage(SelectedPage.ContactUs);
                window.location.hash = "#contactUs";
            }}
            {...props}
            className={twMerge(linkStyles({ variant }), className)}
        />
    );
}
