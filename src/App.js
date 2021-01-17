// import logo from './logo.svg';
// import './App.css';
// import { Title, TitleSmall, Button } from './styles';
import Layout from './hoc/Layout/Layout';
//import Auth from './containers/Auth/Auth';
import AdminBoard from './containers/AdminBoard/AdminBoard';

function App() {
  return (
    <Layout>
      {/* <Title fontSize={50}>
        Hello
        <span>minor text</span>
      </Title>

      <TitleSmall>Small text</TitleSmall>

      <Button >Normal</Button>

      <Button primary>Primary</Button> */}

      {/* <Auth/> */}
      <AdminBoard/>

    </Layout>
  );
}

export default App;
