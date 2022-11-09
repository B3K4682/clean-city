// Next imports
import Image from "next/image";

// Import styles
import styles from "./BlogPost.module.css";

// Import components
import BlogCard from "../BlogCard/BlogCard";
import { Container } from "../..";

// Import types
import { IBlog } from "../../../util/types";

// Import translations
import { useTranslation } from "next-i18next";

interface IBlogPostProps {
  blog: IBlog;
  relatedBlogs: IBlog[];
}

const BlogPost: React.FunctionComponent<IBlogPostProps> = ({
  blog,
  relatedBlogs,
}) => {
  const { image, title, desc, date } = blog;

  const { t } = useTranslation("common");

  return (
    <div>
      <div className={styles.image}>
        <div
          style={{
            background: `linear-gradient(360deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 61.65%), url(${image})`,
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className={styles.relateds}>
          <Container>
            <h3 className={styles.title}>{t("related_blogs")}</h3>
            {relatedBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} isRelated />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
