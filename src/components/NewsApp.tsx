import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  url: string;
}

const NewsApp: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setNews(res.data.results));
  }, []);

  return (
    <div className="card">
      <h2>📰 Tin tức vũ trụ</h2>
      <div className="news-grid">
        {news.map((n) => (
          <div className="news-item" key={n.id}>
            <img src={n.image_url} alt={n.title} />
            <h3>{n.title}</h3>
            <p>{n.summary.slice(0, 100)}...</p>
            <a href={n.url} target="_blank">
              Xem chi tiết
            </a>
            <small>{new Date(n.published_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
