// /api/news.js on Vercel
export default async function handler(req, res) {
    const { category } = req.query;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VITE_API_KEY}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    // Set your own CORS headers here
    res.setHeader("Access-Control-Allow-Origin", "*"); // or restrict to your domain
    res.status(200).json(data);
  }
  