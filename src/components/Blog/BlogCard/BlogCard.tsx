// Next Imports
import Image from "next/image";
import Link from "next/link";

// Import styles
import styles from "./BlogCard.module.css";

// Import components
import { Container } from "../../";
import CalendarIcon from "../../../../public/images/icons/calendar";

// Import types
import type { IBlog } from "../../../util/types";

interface IBlogCardProps {
  blog: IBlog;
  isRelated?: boolean;
}

const BlogCard: React.FunctionComponent<IBlogCardProps> = ({
  blog,
  isRelated = false,
}) => {
  const { id, image, title, shortDesc, date } = blog;

  return (
    <div className={`${styles.card} ${isRelated && styles.isRelated}`}>
      <div className={styles.img}>
        <Image
          src={image}
          width={isRelated ? 382 : 370}
          height={isRelated ? 215 : 205}
          alt={title}
        />
      </div>
      <Container>
        <div className={styles.card_desc}>
          <div className={styles.date}>
            <CalendarIcon />
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className={styles.title}>
            <h3>
              <Link
                href={{
                  pathname: "/blog/[id]",
                  query: { id: id.toString() },
                }}
              >
                {title}
              </Link>
            </h3>
          </div>
          <div className={styles.short_desc}>{shortDesc}</div>
        </div>
      </Container>
    </div>
  );
};

export default BlogCard;
