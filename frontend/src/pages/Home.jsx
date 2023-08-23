import Navbar from "../components/Navbar/Navbar";
import CropCard from "../components/CropCard/CropCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Dashboard</h1>
        <CropCard
          back_img='https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          type='Crop'
          details='See Your Crops'
          url='/allcrops'
        />
        <CropCard
          back_img='https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          type='Live Stock'
          details='See Your Live Stocks'
          url='/alllives'
        />
      </div>
    </div>
  );
};

export default Home;
