export default async function handler(req, res) {
    const { category = "general", query } = req.query;
    const apiKey = process.env.NEWSAPI_KEY; // 🔒 Don't use VITE_ prefix for server code
  
    let url;
  
    // 👇 Handle search
    if (query) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    } else {
      // 👇 Handle general/dashboard
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // ✅ Optional CORS headers (you may not need this at all on Vercel if same-origin)
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ error: "Failed to fetch news data." });
    }
  }
  