import React, {useState} from 'react'
import './App.css'
import q from '../src/img/assassin1.png'
import w from '../src/img/assassins2.png'
import e from '../src/img/Assassins3.png'
import r from '../src/img/Assassins4.png'
import t from '../src/img/assassins5.png'
import y from '../src/img/assassins6.png'
import i from './img/59-597680_playstati.png'
const App = () => {
  let[img,setimg] = useState(q)

  return (
    <div className='block'>
      <div >
        
        <div className='menu'>
        <ul>
        <div>
          <img src={i} width={70}/>
        </div>
        <li><a src=''>Home</a></li>
        <li><a src=''>About</a></li>
        <li><a src=''>Contacts</a></li>
        <li><a src=''>Service</a></li>
        </ul>
        </div>
      </div>
      <div className='image'>
      <img src={q} width={30}/>
      <img src={w} width={30}/>
      <img src={e} width={30}/>
      <img src={r} width={30}/>
      <img src={t} width={30}/>
      <img src={y} width={30}/>
      </div>
      
      <div/>
      <div className='img'>
        <div className='imgblock'>
        <img onClick={()=>setimg(q)} src={q} width={80}/>
        <img onClick={()=>setimg(w)} src={w} width={80}/>
        <img onClick={()=>setimg(e)} src={e} width={80}/>
        <img onClick={()=>setimg(r)} src={r} width={80}/>
        <img onClick={()=>setimg(t)} src={t} width={80}/>
        <img onClick={()=>setimg(y)} src={y} width={80}/>
        </div>
        <div className='btn'>
        <button className='x' onMouseMove={()=>setimg(q)}></button>
        <button className='c'onMouseMove={()=>setimg(w)}></button>
        <button className='v'onMouseMove={()=>setimg(e)}></button>
        <button className='b'onMouseMove={()=>setimg(r)}></button>
        <button className='n'onMouseMove={()=>setimg(t)}></button>
        <button className='m'onMouseMove={()=>setimg(y)}></button>
        </div>
        <div>
        <img src={img} width={550}/>
        </div>
        
      </div>
      
        
        
    </div>
  )
}

export default App
