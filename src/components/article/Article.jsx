import './article.css';

const Article = ({imgURL, title , date}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imgURL} alt="blog" />
      </div>
      <div className='gpt3__blog-container__article-content'>
      <p>{date}</p>
      <h3>{title}</h3>
      <p>Read full article  </p>
      </div>

    </div>
  
  )
}

export default Article
