import React, { createContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Homepage from "@site/src/components/Homepage";

interface User {
  userId: number;
  userName: string;
  avatar: string;
}

export const AuthorizationContext = createContext(null);

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    setTimeout(() => {
      setUser({
        userId: 1031,
        userName: 'arkadiy-jazzteam',
        avatar: 'https://avatars.githubusercontent.com/u/40240538?v=4'
      });
    }, 4000);
  }, []);

  return (
      <AuthorizationContext.Provider value={user}>
        <Homepage/>
      </AuthorizationContext.Provider>
  );
}
