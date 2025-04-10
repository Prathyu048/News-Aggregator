export default async function handler(req, res) {
  const category = req.query.category || 'general';
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json({ articles: data.articles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
