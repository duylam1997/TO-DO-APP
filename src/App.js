import './App.css';
import Header from './components/BTREACT1/Header';
import Input from './components/BTREACT1/Input';
import ButtonPlus from './components/BTREACT1/Button/Button';
import Divider from './components/BTREACT1/Divider/input';
import List from './components/BTREACT1/List/index'
import Footer from './components/BTREACT1/Footer';

function App() {
  return (
    <div className="App">
      <Header title={'TO DO LIST APPLICATION'}/>
      <div className='add-content-form'>
        <Input />
        <ButtonPlus />
      </div>
      <Divider width='100%'/>
      <List />
      <Divider width='100%'/>
      <Footer />
    </div>
  );
}

export default App;
