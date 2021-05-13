import qs from 'querystring';

export const getRecentPosts = async () => {
  const query = qs.stringify({
    _sort: 'created_at:DESC',
    _limit: 3
  });
  const url = new URL(`/posts?${query}`, process.env.STRAPI_URL);
  const res = await fetch(url.href);
  return res.json();
};
