import React from "react";
import "@site/src/shared/Button/button.css";
import styles from "@site/src/shared/Button/button.module.css";
import clsx from "clsx";

interface ButtonProps {
    children: string | JSX.Element[] | JSX.Element;
    className: string;
    href: string;
}

export default function Button(props: ButtonProps): JSX.Element {
    const {className, href = "", children} = props;
    const buttonClassName = clsx('button', className);

    return (
        <a className={buttonClassName} href={href}>{children}</a>
    );
};
