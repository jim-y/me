import qs from 'querystring';

export const getRecentPosts = async () => {
  const query = qs.stringify({
    _sort: 'created_at:DESC',
    _limit: 3
  });
  const res = await fetch(`process.env.STRAPI_URL/posts?${query}`);
  return res.json();
};
