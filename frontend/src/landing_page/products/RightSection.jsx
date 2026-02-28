export default function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h3 className="mb-4 mt-5">{productName}</h3>
          <p>{productDescription}</p>
          <div className="d-flex gap-5">
            {learnMore && (
              <a href="" className="text-decoration-none">
                {learnMore}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5 d-flex justify-content-center align-items-center">
          <img src={imageUrl} alt="product-kite" />
        </div>
      </div>
    </div>
  );
}
