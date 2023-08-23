import { Link } from "react-router-dom";
const CropCard = ({ back_img, type, details, url }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl image-full'>
      <figure>
        <img src={back_img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{type}</h2>
        <p>{details}</p>
        <div className='card-actions justify-end'>
          <Link to={url}>
            <button className='btn btn-primary'>View Crops</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
