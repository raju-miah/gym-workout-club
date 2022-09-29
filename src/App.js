import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Workout from './components/Workout/Workout';

function App() {
  return (
    <div>
      <Header></Header>
      <Workout></Workout>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
