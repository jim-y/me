import { getAllPosts } from "../../lib/api";
import Link from "next/link";
import Layout from "../../components/layouts/main";

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        {heroPost && (
          <Link as={`/blog/posts/${heroPost.slug}`} href="/blog/posts/[slug]">
            <a className="hover:underline">{heroPost.title}</a>
          </Link>
          // <HeroPost
          //   title={heroPost.title}
          //   coverImage={heroPost.coverImage}
          //   date={heroPost.date}
          //   author={heroPost.author}
          //   slug={heroPost.slug}
          //   excerpt={heroPost.excerpt}
          // />
        )}
        {morePosts.length > 0 && "...more"}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
