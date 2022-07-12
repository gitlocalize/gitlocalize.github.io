import React from "react";
import "@site/src/components/Homepage/homepage.css";
import "@site/src/components/Homepage/homepage-adaptive.css";
import styles from "@site/src/components/Homepage/homepage.module.css";
import clsx from "clsx";
import Button from "@site/src/shared/Button";
import Select from "@site/src/shared/Select";
import SelectItem from "@site/src/shared/Select/SelectItem";

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
                                <a className="link navigation__link" href="#features">Features</a>
                                <a className="link navigation__link" href="#projects">Projects</a>
                                <a className="link navigation__link" href="/blog">Blog</a>
                                <a className="link navigation__link" href="/docs">Docs</a>
                            </nav>
                        </div>
                    </div>
                    <div className="homepage__flex">
                        {/*<Button className="workspace-button">Your Workspace</Button>*/}


                        <Select
                            className='user-select'
                            listClassName='user-select-list'
                            title={(
                                <React.Fragment>
                                    <div className='user'/>
                                    <div className='user-select-arrow' />
                                </React.Fragment>
                            )}
                        >
                            <SelectItem
                                title={'Projects'}
                                value={'Projects'}
                                onSelectItem={(title, value) => {console.log('title, value', title, value);}}
                            />
                            <SelectItem
                                title={'Profile'}
                                value={'Profile'}
                                onSelectItem={(title, value) => {console.log('title, value', title, value);}}
                            />

                            <SelectItem
                                title={'Sign out'}
                                value={'Sign out'}
                                onSelectItem={(title, value) => {console.log('title, value', title, value);}}
                            />
                        </Select>


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
                            <Button className="github-button" href="/auth">Get started with GitHub</Button>
                            <Button className="demo-button" href="/demo">Watch a Demo</Button>
                        </div>
                    </div>
                    <div className="homepage__flex main__app-img-container flex-l-4 flex-m-5">
                        <div className="main__app-img"/>
                    </div>
                </div>
            </div>

            <div className="homepage__container features" id="features">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="features__title">Features</div>
                        <div className="features__description">A better process to translate products, documentation or websites better process
                            to translate products, documentation or websites</div>
                    </div>
                </div>
            </div>

            <div className="homepage__container repository" id="repository">
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

            <div className="homepage__container parsing" id="parsing">
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

            <div className="homepage__container teamwork" id="teamwork">
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

            <div className="homepage__container projects" id="projects">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="projects__title">Projects Already Using GitLocalize</div>
                        <div className="projects__description">Easily see what needs to be translated – GitLocalize will parse your files into trackable text segments.</div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="google">
                            <div className="project__side">
                                <div className="project__img google_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/google/WebFundamentals">GoogleChrome/web.dev</a>
                                <div className="project__description">Building a better web</div>
                                {/*<div className="project__languages">17 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                <Button className="project__arrow" href="https://gitlocalize.com/google/WebFundamentals">{''}</Button>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="vue">
                            <div className="project__side">
                                <div className="project__img vue_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/repo/2509">ruRust/rbe-gitlocalize</a>
                                <div className="project__description">Rust by example</div>
                                {/*<div className="project__languages">4 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                <Button className="project__arrow" href="https://gitlocalize.com/repo/2509">{''}</Button>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="nuxt">
                            <div className="project__side">
                                <div className="project__img nuxt_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/repo/4592">tensorflow/docs-l10n</a>
                                <div className="project__description">Tensorflow Documentation</div>
                                {/*<div className="project__languages">12 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                {/*<div className="project__arrow"/>*/}
                                <Button className="project__arrow" href="https://gitlocalize.com/repo/4592">{''}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container review" id="review">
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

            <div className="homepage__container advantages" id="advantages">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10">
                        <div className="advantages__title">How It Works</div>
                        <div className="advantages__description">A better process to translate products, documentation or websites better process
                            to translate products, documentation or websites</div>
                        <iframe className="advantages__video" src="https://www.youtube.com/embed/PoSjHoEWV3w" frameBorder="0"
                                allowFullScreen/>
                    </div>
                </div>
            </div>

            <div className="homepage__container enjoy" id="enjoy">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="enjoy__title">Enjoy a Better Procees of Localization</div>
                        <Button className="github-button enjoy__button" href="/auth">Get started with GitHub</Button>
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
                                        <a className="footer__menu-item" href="#repository">Sync with Repository</a>
                                        <a className="footer__menu-item" href="#parsing">Parsing & Segmentation</a>
                                        <a className="footer__menu-item" href="#teamwork">Teamwork</a>
                                    </div>
                                </div>
                                <div className="footer__menu footer__projects">
                                    <div className="footer__menu-title">Contribute to Projects</div>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="#google">Google Web Fundamentals</a>
                                        <a className="footer__menu-item" href="#vue">Vue.js</a>
                                        <a className="footer__menu-item" href="#nuxt">Nuxt.js</a>
                                    </div>
                                </div>
                                <div className="footer__menu footer__company">
                                    <div className="footer__menu-title">Company</div>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="#about">About Us</a>
                                        <a className="footer__menu-item" href="#terms">Terms of Service</a>
                                        <a className="footer__menu-item" href="#privacy">Privacy Policy</a>
                                    </div>

                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="#chat">Community Chat</a>
                                        <a className="footer__menu-item" href="#contact">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex social">
                        <div className="facebook"/>
                        <div className="twitter"/>
                    </div>
                    <div className="homepage__flex">
                        <div className="copyright">© {new Date().getFullYear()} All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
