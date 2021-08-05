import styles from "./ArticleCard.module.css";
import Image from "next/image";

const ArticleCard = ({ info }) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={info.image}
          alt={info.alt}
          width="327"
          height="200"
        />
      </div>
      <div className={styles.info}>
        <h5>By {info.author}</h5>
        <h4>{info.title}</h4>
        <p>{info.message}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
