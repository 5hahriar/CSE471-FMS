import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const AddCrop = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [field, setField] = useState("");
  const [name, setName] = useState("");
  const [yields, setYields] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitro, setNitro] = useState("");

  console.log(field, name, yields, moisture, nitro);

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
    const res = await axios.post(
      "http://localhost:8080/api/crop/addcrop",
      crop
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Add</h1>
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
            onChange={(e) => setNitro(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCrop;
