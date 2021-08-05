import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./ArticleSection.module.css";
import articles from "./article-data";

const ArticleSection = () => {
  const articleList = articles.map((article) => (
    <ArticleCard key={article.id} info={article} />
  ));

  return (
    <section className={styles.articleContainer}>
      <h2>Latest Articles</h2>
      <div className={styles.articleList}>{articleList}</div>
    </section>
  );
};

export default ArticleSection;
