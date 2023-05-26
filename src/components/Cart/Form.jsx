import React, { useState } from 'react'
import { IdCompra } from './IdCompra';

export const Form = () => {

    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
        nombre: "",
        apellido: ""
    });


    const [mostrarId, setMostrarId] = useState(false)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.email !== formData.confirmEmail) {
            alert("Los emails no coinciden");
            return;
        }
        if (formData.email === formData.confirmEmail) {
            setMostrarId(true)
            }
        console.log(formData);
    };

  return (
    <form className='was-validated' onSubmit={handleSubmit}>
        <h5>Para continuar con la compra debe completar los siguientes datos:</h5>
                <div className='caja'>
                    <div class="row g-3 align-items-center w-2">
                        <div class="col-3">
                            <label for="inputPassword6" class="col-form-label">Nombre: </label>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name='nombre' placeholder='Thiago' value={formData.nombre} onChange={handleChange} required />
                            <div className='invalid-feedback'>Debe ingresar un nombre.</div>
                        </div>

                    </div>
                    <div class="row g-3 align-items-center w-2">
                        <div class="col-3">
                            <label for="inputPassword6" class="col-form-label">Apellido: </label>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name='apellido' placeholder='Santamaria' value={formData.apellido} onChange={handleChange} required />

                            <div className='invalid-feedback'>Debe ingresar un Apellido.</div>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center w-2">
                        <div class="col-3">
                            <label for="inputPassword6" class="col-form-label">Email:</label>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" name='email' placeholder="thiago@ejemplo.com" value={formData.email} onChange={handleChange} required />
                            <div className='invalid-feedback'>Debe ingresar un Email válido.</div>
                        </div>
                        
                    </div>
                    <div class="row g-3 align-items-center w-2">
                        <div class="col-3">
                            <label for="inputPassword6" class="col-form-label">Confirmar Email:</label>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" name='confirmEmail' placeholder="thiago@ejemplo.com" value={formData.confirmEmail} onChange={handleChange} required />
                            
                        </div>
                        
                    </div>
                </div>
                <button type='submit'>Comprar</button>
                {mostrarId?<IdCompra formData={formData}/>:null}
            </form>
  )
}
