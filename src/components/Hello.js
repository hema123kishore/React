import React from 'react'
const Hello = () => {
  /*   return (
        <div>
            <h1>Hello world</h1>
            <h2>Welcome to React world</h2>
        </div>

    ); */ //This is Jsx (javascript xml )

    return React.createElement('div',
    {id : 'hello' , className : 'Emptyclass'}, 
    React.createElement('h1',null,'Hello Welcome to React')
    )
//Without JSX provided createElement  has 3 properties like specify Html tag 2.properties 3.children for HTML
}


export default Hello