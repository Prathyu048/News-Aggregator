export default async function handler(req, res) {
    const { category = "general", query } = req.query;
    const apiKey = process.env.NEWSAPI_KEY;
  
    let url;
  
    if (query) {
      // User searched for something → use the 'everything' endpoint
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    } else {
      // No query → show general dashboard headlines
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching from NewsAPI:", error);
      res.status(500).json({ error: "Failed to fetch news data." });
    }
  }
  