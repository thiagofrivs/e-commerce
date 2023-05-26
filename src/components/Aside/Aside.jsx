import React, { useState } from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Aside = () => {

    const [clicked, setClicked] = useState('todos')

    const handleClick = (categoria) => {
        setClicked(categoria)
    }

    console.log(clicked)

    return (
        <aside>
            <header>
                <h1>Tiendástica.</h1>
            </header>
            <div className='miniContainer'>
                <Link to={'/'} className='cat'><button className={`cat ${clicked === 'todos' ? 'btn-active' : ''}`} onClick={() => handleClick('todos')}>Todos los productos</button></Link>
                <Link to={'/category/Almohadas'} className='cat '><button className={`cat ${clicked === 'almohadas' ? 'btn-active' : ''}`} onClick={() => handleClick('almohadas')}>Almohadas</button></Link>
                <Link to={'/category/Reposeras'} className='cat'><button className={`cat ${clicked === 'reposeras' ? 'btn-active' : ''}`} onClick={() => handleClick('reposeras')}>Reposeras</button></Link>
                <Link to={'/category/Muebles'} className='cat'><button className={`cat ${clicked === 'muebles' ? 'btn-active' : ''}`} onClick={() => handleClick('muebles')}>Muebles</button></Link>


            </div>
            <div className="miniContainer">
                <Link to={'/cartcheckout'}>
                    <button className={`cat ${clicked === 'cart' ? 'btn-active' : ''}`} onClick={() => handleClick('cart')}><CartWidget /></button>
                </Link>
            </div>
            <h5>© Thiago Santamaria</h5>
        </aside>
    )
}
