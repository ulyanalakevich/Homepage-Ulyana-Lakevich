const PortfolioItem = ({ img, title, urlDemo, urlGit }) => {
  return (
    <div className="portfolio__item">
      <img src={img} className="portfolio__img" />
      <div className="portfolio__hover">
        <h3 className="portfolio__title">{title}</h3>
        <div className="portfolio__url">
          <a href={urlDemo} className="portfolio__link">Demo</a>
          <a href={urlGit} className="portfolio__link" >Git</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
