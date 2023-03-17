import './App.css';
import SubTitle from './components/SubTitle';
import Title from './components/Title';
import { Text } from './components/Text';

const libros = ['El principito', 'El mundo de sofia', 'Hamlet'];

function App() {
  return (
    <div className='App'>
      {libros.map((libro) => {
        return <Title frase={libro} color='violet' />;
      })}
      <SubTitle />
      <Text />
    </div>
  );
}

export default App;
