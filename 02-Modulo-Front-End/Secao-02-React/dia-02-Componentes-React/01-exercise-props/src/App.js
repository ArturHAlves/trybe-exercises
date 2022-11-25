import Image from "./Components/Image";
import cat from './imagens/cat.jpg'

function App() {
  console.log(Image);
  return (
    
    <main>
      <Image source={ cat } alternativeText={'Foto de um gato'} />
    </main>
  );
}

export default App;
