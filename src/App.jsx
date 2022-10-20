import { useState } from 'react' //Se importa por defecto lo trae react
import ChangeColor from '../component/ChangeColor'
import Input from '../component/Input'
import './App.css'

function App() {

  const [text, setText] = useState("Dame click") // conocido como ESTADOS: esto es para que pueda cambiar su valor, sino sera estatico JSX no respeta igual que JS
  const changeText = () => {
    if(text ==="Dame click"){
      setText("Gracias por darme click") //Para que el incremente cuando lo asigne
    }else{
      setText("Dame click") //Para que el incremente cuando lo asigne

    }
  }
  return (

    <div className="App">
      <>
      <div className="card">
        <h1>{text}</h1>
        <button onClick={changeText}>Cambiar estado</button>
        <Input/>
        <ChangeColor /> {/*useState*/}
        <ChangeColor /> {/*useState*/}
        <ChangeColor /> {/*useState*/}
        <ChangeColor /> {/*useState*/}
      </div>
      </>
    </div>
  )
}

export default App
