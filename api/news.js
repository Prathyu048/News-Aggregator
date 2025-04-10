// /api/news.js

export default async function handler(req, res) {
    const { category = "general" } = req.query;
  
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWSAPI_KEY}`
      );
  
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch news" });
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  