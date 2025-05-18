import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Hands-on Training",
    description: (
      <>
        Get practical experience with real-world systems administration tasks
        through our interactive labs and exercises focused on Linux, Windows
        Server, and cloud platforms.
      </>
    ),
  },
  {
    title: "Industry Best Practices",
    description: (
      <>
        Learn enterprise-grade system administration following industry
        standards for security, automation, monitoring, and infrastructure
        management.
      </>
    ),
  },
  {
    title: "Career Development",
    description: (
      <>
        Prepare for professional certifications and build the skills needed to
        advance your career as a systems administrator in modern IT
        environments.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
