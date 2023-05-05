import React, { useEffect, useState } from 'react'
import { db } from '../itemsPrincipal/ItemListContainer';
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { ItemCount } from './ItemCount';

export const ItemDetatilContatiner = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();




    useEffect(() => {
        const getProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'items'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })

                })
                setItem(docs.find(item => item.id === id))

            }
            catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [id]);

  return (
    <main className='no-mg'>
        <div className='detail-todo'>
            <ItemDetail item={item}/>
        </div>
    </main>
  )
}
