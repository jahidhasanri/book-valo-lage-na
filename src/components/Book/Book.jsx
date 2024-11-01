

const Book = ({book}) => {
    const {bookName,author,image,tags}=book
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className="p-6 bg-slate-600 rounded-2xl">
    <img className=" h-[200px] p-6"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{bookName}</p>
    <p>{author}</p>
    <div className="card-actions justify-center">
        {
            tags.map(tag=><div className="badge badge-outline">{tag}</div>
            )
        }
    </div>
  </div>
</div>
    );
};

export default Book;