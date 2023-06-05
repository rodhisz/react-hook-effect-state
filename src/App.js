import './App.css';
import React, { useState, useEffect } from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import  {NumericFormat}  from 'react-number-format';

function App() {

  const [angka, setAngka] = useState(0)
  const [paket, setPaket] = useState("")
  const [harga, setHarga] = useState(0)

  if (angka < 0) {
    setAngka(0)
    alert('Jumlah pengunjung tidak boleh kurang dari 0')
  }

  useEffect(() => {
    if (angka === 0) {
      setPaket("")
      setHarga(0)
    } else if (angka <= 1) {
      setPaket("Single")
      setHarga(100000)
    } else if (angka < 3) {
      setPaket("Double")
      setHarga(90000)
    } else if (angka <= 8) {
      setPaket("Family")
      setHarga(80000)
    } else {
      setPaket("Rombongan")
      setHarga(50000)
    }
  }, [angka])

  const hasil = harga*angka
  
  
  return (
    <div className='App'>
      <Header />
      <Content />
      <h1>Jumlah Pengunjung : {angka}</h1>
      <button onClick={() => setAngka((prev) => prev + 1)}> + </button>
      <button onClick={() => setAngka((prev) => prev - 1)}> - </button>
      <h5>Jenis Paket Harga : {paket}</h5>
      <h5>Rp. {harga.toLocaleString()} x {angka} = Rp. {hasil.toLocaleString()} </h5>
    </div>
  );
}

export default App;
