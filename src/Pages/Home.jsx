import GridContainer from '../components/GridContainer/GridContainer';
const Home = ({ data }) => {
  return (
    <div className="home">
      <GridContainer data={data} />
    </div>
  );
};

export default Home;
