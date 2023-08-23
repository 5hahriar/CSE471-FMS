import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllCrops = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    const getCrops = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/crop/${user.user._id}`
      );
      setCrops(res.data);
    };
    getCrops();
  }, []);
  console.log(crops);
  const deleteCrop = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/crop/delete/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <h1>All Crops</h1>
      {crops.map((crop) => (
        <div
          className='card w-96 bg-primary text-primary-content'
          key={crop._id}
        >
          <div className='card-body'>
            <h2 className='card-title'>{crop.name}</h2>
            <p>Field: {crop.field}</p>
            <p>Yield: {crop.yield}</p>
            <p>Moisture: {crop.moisture}</p>
            <p>NO2: {crop.nitro}</p>
            <div className='card-actions justify-end'>
              <Link to={`/editcrop/${crop._id}`}>
                <button className='btn'>Edit</button>
              </Link>
              <button className='btn' onClick={() => deleteCrop(crop._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCrops;
