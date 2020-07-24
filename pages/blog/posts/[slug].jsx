import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../../lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Next.js Blog Example with Markdown</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <table>
              <thead>
                <tr>
                  <th>title</th>
                  <th>coverImage</th>
                  <th>date</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{post.title}</td>
                  <td>{post.coverImage}</td>
                  <td>{post.date}</td>
                  <td>{post.author.name}</td>
                </tr>
              </tbody>
            </table>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
