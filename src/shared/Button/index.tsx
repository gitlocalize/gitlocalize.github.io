import React from "react";
import "@site/src/shared/Button/button.css";
import styles from "@site/src/shared/Button/button.module.css";
import clsx from "clsx";

interface ButtonProps {
    children: string | JSX.Element[] | JSX.Element;
    className: string;
}

export default function Button(props: ButtonProps): JSX.Element {
    const {className, children} = props;
    const buttonClassName = clsx('button', className);

    return (
        <div className={buttonClassName}>{children}</div>
    );
};
