import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



const columns = [
    {
        name: 'Imágenes',
        grow: 0,
        cell: row => <img height="84px" width="84px" alt={row.name} src={row.posterUrl} />,
      },

    { title: 'Titulo', field: 'titulo' },
    { title: 'Fecha', field: 'fecha', type: 'numeric'},
    { title: 'Disponibilidad', field: 'disponibilidad' },
    { title: 'Estado', field: 'estado' },
    { title: 'N° Likes', field: 'likes', type: 'numeric'},

  ]

  

const data = [

    

];


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function App() {
  const styles= useStyles();
  const [data, setData]= useState([]);

  const [datoselec, setdatoselec]=useState({
    titulo: "",
    fecha: "",
    disponibilidad: "",
    estado: "",
    likes: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setdatoselec(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, datoseleccionado)
    .then(response=>{
      setData(data.concat(response.data));
    }).catch(error=>{
      console.log(error);
    })
  }



  useEffect(()=>{
    peticionGet();
  }, [])


  return (
    <div className="App">

     <MaterialTable
          columns={columns}
          data={data}
          actions={[

          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
    
    </div>
  );
}

export default App;