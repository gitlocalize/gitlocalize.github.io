import React from "react";
import "@site/src/components/HomepageHeader/homepage-header.css";
import styles from "@site/src/components/HomepageHeader/styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HomepageHeader(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('header', styles.heroBanner)}>
            <div className="container">
                <h1 className="header__title">{siteConfig.title}</h1>
                <p className="header__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/about">
                        Docs
                    </Link>
                </div>
            </div>
        </header>
    );
}
