import { useState } from 'react';
import './App.css';

function App() {
  const animals = ['dog', 'cat', 'rooster', 'hoorse'];
  const [animal, setAnimal] = useState(null);

  function emitSound(pet) {
    setAnimal(pet);
    switch (pet) {
      case 'dog':
        console.log('Gua');
        break;
      case 'cat':
        console.log('Miau');
        break;
      case 'rooster':
        console.log('Kikiriki');
        break;
      default:
        console.log('default sound');
    }
  }

  function emitAnimalSound(pet) {
    switch (pet) {
      case 'dog':
        console.log('Gua');
        break;
      case 'cat':
        console.log('Miau');
        break;
      case 'rooster':
        console.log('Kikiriki');
        break;
      default:
        console.log('default sound');
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Select an animal:</p>
      </header>
      <main>
        <section className='main-container'>
          <ol className='list'>
            {animals.map((animal, index) => (
              <li key={index} onClick={() => emitSound(animal)}>
                {animal}
              </li>
            ))}
          </ol>
          {animal && <p>Animal selected: {animal}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
