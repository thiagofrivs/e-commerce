import React from 'react'
import Item from './Items'

export const ItemList = ({ item }) => {
    console.log(item)
    return (
        <>
            {
                item.map(item =>
                    <div className='container' key={item.id}>
                        <Item item={item} />
                    </div>

                )
            }

        </>
    )
}
