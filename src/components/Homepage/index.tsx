import React from "react";
import "@site/src/components/Homepage/homepage.css";
import "@site/src/components/Homepage/homepage-adaptive.css";
import styles from "@site/src/components/Homepage/homepage.module.css";
import clsx from "clsx";
import Button from "@site/src/shared/Button";

export default function Homepage(): JSX.Element {
    return (
        <div className="homepage">
            <div className="header__container header">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="navigation__container">
                            <div className="logo">
                                <a className="link" href="/"/>
                            </div>
                            <nav className="navigation">
                                <a className="link navigation__link" href="/features">Features</a>
                                <a className="link navigation__link" href="/projects">Projects</a>
                                <a className="link navigation__link" href="/blog">Blog</a>
                                <a className="link navigation__link" href="/docs">Docs</a>
                            </nav>
                        </div>
                    </div>
                    <div className="homepage__flex">
                        <Button className="workspace-button">Your Workspace</Button>
                    </div>
                </div>
            </div>

            <div className="homepage__container main">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-6 flex-m-5">
                        <div className="main__title">Continuous Localization for GitHub Projects</div>
                        <div className="main__description">A better process to translate products, {/*<br/>*/}
                            documentation or websites</div>
                        <div className="main__actions">
                            <Button className="github-button">Get started with GitHub</Button>
                            <Button className="demo-button">Watch a Demo</Button>
                        </div>
                    </div>
                    <div className="homepage__flex main__app-img-container flex-l-4 flex-m-5">
                        <div className="main__app-img"/>
                    </div>
                </div>
            </div>

            <div className="homepage__container features">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="features__title">Features</div>
                        <div className="features__description">A better process to translate products, documentation or websites better process
                            to translate products, documentation or websites</div>
                    </div>
                </div>
            </div>

            <div className="homepage__container repository">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-5 flex-m-6">
                        <div className="repository__img-container">
                            <div className="repository__img"/>
                        </div>
                    </div>
                    <div className="repository__sync homepage__flex flex-l-5 flex-m-3">
                        <div className="repository__sync-img"/>
                        <div className="repository__sync-title">Sync with Repository</div>
                        <div className="repository__sync-description">Keep translations up to date – GitLocalize tracks changes in your repository and pulls them into the project. Translated files are synced back to the repo via a pull request.</div>
                    </div>

                </div>
            </div>

            <div className="homepage__container parsing">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10">
                        <div className="parsing__img"/>
                        <div className="parsing__title">Parsing and Segmentation</div>
                        <div className="parsing__description">Easily see what needs to be translated – GitLocalize will parse your files into trackable text segments.</div>

                        <div className="parsing__app-img-container">
                            <div className="parsing__app-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container teamwork">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-5 flex-m-6">
                        <div className="teamwork__app-img-container">
                            <div className="teamwork__app-img"/>
                        </div>
                    </div>
                    <div className="teamwork__info homepage__flex flex-l-5 flex-m-3">
                        <div className="teamwork__info-img"/>
                        <div className="teamwork__info-title">Teamwork</div>
                        <div className="teamwork__info-description">Engage your team and community into the translation process <br/> – assign language moderators, send for review, and discuss changes. The same way you do it on GitHub.</div>
                    </div>
                </div>
            </div>

            <div className="homepage__container projects">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="projects__title">Projects Already Using GitLocalize</div>
                        <div className="projects__description">Easily see what needs to be translated – GitLocalize will parse your files into trackable text segments.</div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="project">
                            <div className="project__side">
                                <div className="project__img google_img"/>
                                <div className="project__title">Google Web Fundamentals</div>
                                <div className="project__description">Best practices for modern web development</div>
                                <div className="project__languages">17 Languages</div>
                            </div>
                            <div className="project__side project__arrow-container">
                                <div className="project__arrow"/>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex">
                        <div className="project">
                            <div className="project__side">
                                <div className="project__img vue_img"/>
                                <div className="project__title">Vue.js</div>
                                <div className="project__description">Vue.js Server-Side Rendering Guide</div>
                                <div className="project__languages">4 Languages</div>
                            </div>
                            <div className="project__side project__arrow-container">
                                <div className="project__arrow"/>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex">
                        <div className="project">
                            <div className="project__side">
                                <div className="project__img nuxt_img"/>
                                <div className="project__title">Nuxt.js</div>
                                <div className="project__description">Documentation of Nuxt.js</div>
                                <div className="project__languages">12 Languages</div>
                            </div>
                            <div className="project__side project__arrow-container">
                                <div className="project__arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container review">
                <div className="homepage__container--adaptive">
                    <div className="review__info homepage__flex">
                        <div className="review__info-side flex-l-2 flex-m-3">
                            <div className="review__info-avatar"/>
                        </div>
                        <div className="review__info-side flex-l-8 flex-m-6">
                            <div className="review__info-description">
                                <div className="review__info-paragraph">
                                    We use GitLocalize to localize our company WebAPI document. GitLocalize is extraordinarily convenient, flexible, and dynamic. We were pleasantly surprised to find that localization takes an extremely short time!
                                </div>
                                <div className="review__info-paragraph">
                                    Translations can be managed statically on a file level and also can be compared to the original by segment. This makes managing the work absolutely seamless. We are able to create a consistent translation throughout the entire website with GitLocalize. To say we are impressed is an understatement.
                                </div>
                            </div>
                            <div className="review__info-name">Yuki Iizuka</div>
                            <div className="review__info-organisation">Val Laboratory</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container advantages">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10">
                        <div className="advantages__title">How It Works</div>
                        <div className="advantages__description">A better process to translate products, documentation or websites better process
                            to translate products, documentation or websites</div>
                        <div className="advantages__video"/>
                    </div>
                </div>
            </div>

            <div className="homepage__container enjoy">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="enjoy__title">Enjoy a Better Procees of Localization</div>
                        <Button className="github-button enjoy__button">Get started with GitHub</Button>
                    </div>
                </div>
            </div>

            <div className="homepage__container footer">
                <div className="homepage__container--adaptive">
                    <div className="footer__container homepage__flex">
                        <div className="footer__side">
                            <div className="logo__img"/>
                            <div className="logo__title">Continuous Localization for GitHub Projects</div>
                        </div>
                        <div className="footer__side">
                            <div className="footer__menu-container">
                                <div className="footer__menu footer__features">
                                    <div className="footer__menu-title">Features</div>
                                    <div className="footer__menu-items">
                                        <div className="footer__menu-item">Sync with Repository</div>
                                        <div className="footer__menu-item">Parsing & Segmentation</div>
                                        <div className="footer__menu-item">Teamwork</div>
                                    </div>
                                </div>
                                <div className="footer__menu footer__projects">
                                    <div className="footer__menu-title">Contribute to Projects</div>
                                    <div className="footer__menu-items">
                                        <div className="footer__menu-item">Google Web Fundamentals</div>
                                        <div className="footer__menu-item">Vue.js</div>
                                        <div className="footer__menu-item">Nuxt.js</div>
                                    </div>
                                </div>
                                <div className="footer__menu footer__company">
                                    <div className="footer__menu-title">Company</div>
                                    <div className="footer__menu-items">
                                        <div className="footer__menu-item">About Us</div>
                                        <div className="footer__menu-item">Terms of Service</div>
                                        <div className="footer__menu-item">Privacy Policy</div>
                                    </div>

                                    <div className="footer__menu-items">
                                        <div className="footer__menu-item">Community Chat</div>
                                        <div className="footer__menu-item">Contact Us</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="social"/>
                    </div>
                    <div className="homepage__flex">
                        <div className="copyright">© 2019 All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
