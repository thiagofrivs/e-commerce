import React from 'react'
import Item from './Items'

export const ItemList = ({ item }) => {
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
