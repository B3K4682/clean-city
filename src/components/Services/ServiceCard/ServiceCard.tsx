// Next Imports
import Image from "next/image";
import Link from "next/link";

// Import styles
import styles from "./ServiceCard.module.css";

// Import components
import { Container } from "../..";

// Import types
import type { ServiceType } from "../../../util/types";

interface IServiceCardProps {
  service: ServiceType;
  isRelated?: boolean;
}

const ServiceCard: React.FunctionComponent<IServiceCardProps> = ({
  service,
  isRelated = false,
}) => {
  const { title, titleEn, slug, image } = service;

  return (
    <div className={`${styles.card} ${isRelated && styles.isRelated}`}>
      <div className={styles.img}>
        <Image
          src={`/images/services/${image}`}
          width={isRelated ? 382 : 370}
          height={isRelated ? 215 : 205}
          alt={title}
        />
      </div>
      <Container>
        <div className={styles.card_desc}>
          <div className={styles.title}>
            <h3>
              <Link
                href={{
                  pathname: "/services/[slug]",
                  query: { slug: slug.toString() },
                }}
              >
                {title}
              </Link>
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceCard;
