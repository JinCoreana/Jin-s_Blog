import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import EditPost from './EditPost';
import Layout from './Layout';
import About from './About';
import {DataProvider} from '../context/DataContext'

function App() {

  return (
  <DataProvider>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="post">
    <Route index element={
    <NewPost/>}/>
   <Route path=":id" element={
   <PostPage 
    />}
    />
      
  <Route path="edit">
    <Route path=':id'
    element={<EditPost />}/>
  </Route>
  </Route>

  <Route path="about" element={<About/>}/>
  <Route path="*" element={<Missing/>}/>
</Route>
</Routes>
</DataProvider>
  );
}



export default App;
