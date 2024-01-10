import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { AlertCircle, Landmark, LibraryBig } from "lucide-react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.heroBanner,
        styles.heroBackground
      )}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.row}>
          <div className={(styles.shadowCard, styles.cardHeader)}>
            <AlertCircle className={styles.iconWrapper} />
            <Link className={styles.buttons} to="/main/overview/intro">
              Read the Altered Paradigm Docs
            </Link>
          </div>
          <div className={(styles.shadowCard, styles.cardHeader)}>
            <LibraryBig className={styles.iconWrapper} />
            <Link className={styles.buttons} to="/main/overview/intro">
              Protocol Tutorial
            </Link>
          </div>
          <div className={(styles.shadowCard, styles.cardHeader)}>
            <Landmark className={styles.iconWrapper} />
            <Link className={styles.buttons} to="/main/overview/intro">
              Governance
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Altered Paradigm Docs"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
