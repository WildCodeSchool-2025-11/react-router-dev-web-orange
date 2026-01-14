import { useParams } from "react-router";

function Article() {
  const { id } = useParams();
  const articles = [
    { id: "1", title: "Article 1", description: "This is article 1" },
    { id: "2", title: "Article 2", description: "This is article 2" },
    { id: "3", title: "Article 3", description: "This is article 3" },
  ];

  const article = articles.find((article) => article.id === id);

  return (
    <>
      {article == null ? (
        <h1>Hacker malveillant</h1>
      ) : (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </>
      )}
    </>
  );
}

export default Article;
