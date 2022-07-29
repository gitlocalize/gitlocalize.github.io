import React, { createContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Homepage from "@site/src/components/Homepage";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
      <Homepage/>
  );
}
