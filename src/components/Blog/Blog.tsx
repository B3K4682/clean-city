// Import styles
import styles from "./Blog.module.css";

// Import components
import BlogCard from "./BlogCard/BlogCard";
import { Container } from "..";

// Import types
import type { IBlog } from "../../util/types";

interface IBlogProps {
  blogs: IBlog[];
}

const Blog: React.FunctionComponent<IBlogProps> = ({ blogs }) => {
  return (
    <div className={styles.blogs}>
      <Container>
        <div className={styles.blogs_wrapper}>
          {blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
