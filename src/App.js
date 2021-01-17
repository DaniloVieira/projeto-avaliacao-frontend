// import logo from './logo.svg';
// import './App.css';
import Layout from './hoc/Layout/Layout';
//import Auth from './containers/Auth/Auth';
import AdminBoard from './containers/AdminBoard/AdminBoard';


function App() {
  return (
    <Layout>
      

      {/* <Auth/> */}
        
      <AdminBoard/>      
    </Layout>
  );
}

export default App;
