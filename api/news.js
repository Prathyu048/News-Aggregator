export default async function handler(req, res) {
    const { category = 'general' } = req.query;
    const apiKey = process.env.NEWS_API_KEY;
  
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      );
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch news', error });
    }
  }
  