import React from 'react'

function Columns() {
    const items = []

    return (
        // was React.Fragment ( <> is shorthand ) The issue with this though is that you can't pass in a key attribute.
        <> {/* td element can't be a child element of a <div>*/}
            {/* {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Shrek</td>
        </>
    )
}

export default Columns