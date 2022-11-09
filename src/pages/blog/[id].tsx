// Next imports
import { GetStaticPaths, GetStaticProps } from "next";

// Import components
import { BlogPost, Container } from "../../components";

// Constants
import { blogs } from "../../util/constants";

// Types
import { IBlog } from "../../util/types";

// Translation imports
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../../next-i18next.config";

interface IBlogSingleProps {
  blog: IBlog;
  relatedBlogs: IBlog[];
}

const BlogSingle: React.FunctionComponent<IBlogSingleProps> = ({
  blog,
  relatedBlogs,
}) => {
  return (
    <div style={{ marginTop: "64px", marginBottom: "64px" }}>
      <Container>
        <BlogPost blog={blog} relatedBlogs={relatedBlogs} />
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const blog = blogs.find((blog) => blog.id.toString() === params?.id);
  const relatedBlogs = blogs.filter(
    (blog) => blog.id.toString() !== params?.id
  );

  return {
    props: {
      blog,
      relatedBlogs,
      ...(await serverSideTranslations(
        locale ?? nextI18nextConfig.i18n.defaultLocale,
        ["common"]
      )),
    },
  };
};

export default BlogSingle;
