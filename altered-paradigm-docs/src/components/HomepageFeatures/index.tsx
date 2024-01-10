import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import { ExternalLink } from "lucide-react";
import Discord from "@site/static/img/discord.svg";
import Telegram from "@site/static/img/telegram.svg";
import X from "@site/static/img/x.svg";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

export const guides = [
  {
    title: "What is the Dual Treasury System?",
    text: "An overview of the wo treasuries",
    to: "./main/overview/dual-treasury-system",
  },
  {
    title: "How does the Floor Price work?",
    text: "An overview of the Floor Price Mechanism",
    to: "./main/overview/floor-price",
  },
  {
    title: "What is Bonding?",
    text: "An overview of Bonding",
    to: "./main/overview/bonding",
  },
];

const Guides = () => {
  return (
    <div>
      <h2>Getting Started</h2>
      <div>
        {guides.map((action) => (
          <Link
            style={{ textDecoration: "none" }}
            key={action.title}
            to={action.to}
          >
            <div className={styles.card} style={{ marginBottom: "1rem" }}>
              <div className={styles.linkRow}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 style={{ marginBottom: "0rem" }}>{action.title}</h3>
                </div>
                <ExternalLink />
              </div>
              <p style={{ marginBottom: "0rem" }}>{action.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.guidesContainer}>
        <Guides />
      </div>
      <hr />

      <div className={styles.row}>
        <Link
          style={{ textDecoration: "none" }}
          href={"https://discord.gg/NUc9fnvSJA"}
        >
          <div className={styles.centerCard}>
            <Discord style={{ width: "48px", height: "48px" }} />
            <div>
              <h3>Discord</h3>
              <p>Join the Altered Paradigm community on discord</p>
            </div>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href={"https://t.me/alteredparadigmofficial"}
        >
          <div className={styles.centerCard}>
            <Telegram style={{ width: "48px", height: "48px" }} />
            <div>
              <h3>Telegram</h3>
              <p>Join the Altered Paradigm community on telegram</p>
            </div>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href={"https://x.com/0xAltered?t=x_9Sk6tXd3-DFOUzs_SxgQ&s=09"}
        >
          <div className={styles.centerCard}>
            <X style={{ width: "48px", height: "48px" }} />
            <div>
              <h3>X</h3>
              <p>Join the Altered Paradigm community on X</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
