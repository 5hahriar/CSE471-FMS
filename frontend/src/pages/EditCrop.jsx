import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditCrop = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let location = useLocation();
  let cid = location.pathname.split("/")[2];
  const [crop, setCrop] = useState([]);
  useEffect(() => {
    const getCrop = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/crop/getcrop/${cid}`
      );

      setCrop(res.data);
    };
    getCrop();
  }, []);
  console.log(crop);
  const [field, setField] = useState();
  const [name, setName] = useState();
  const [yields, setYields] = useState();
  const [moisture, setMoisture] = useState();
  const [nitro, setNitro] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    const crop = {
      uid: user.user._id,
      field,
      name,
      yield: yields,
      moisture,
      nitro,
    };
    const res = await axios.put(
      `http://localhost:8080/api/crop/editcrop/${cid}`,
      crop
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Edit</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Field</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='field'
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Yield</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='yield'
            value={yields}
            onChange={(e) => setYields(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Moisture</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='moisture'
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Nitro</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='nitro'
            value={nitro}
            onChange={(e) => setNitro(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditCrop;
