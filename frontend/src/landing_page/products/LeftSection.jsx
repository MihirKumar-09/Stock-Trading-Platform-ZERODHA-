export default function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageUrl} alt="product-kite" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h3 className="mb-4">{productName}</h3>
          <p>{productDescription}</p>
          <div className="d-flex gap-5">
            {tryDemo && (
              <a href="" className="text-decoration-none">
                {tryDemo}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {learnMore && (
              <a href="" className="text-decoration-none">
                {learnMore}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
          <div className="d-flex gap-5 mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google-PlayStore"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App-Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
