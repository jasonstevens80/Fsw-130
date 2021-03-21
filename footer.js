import React from 'react'
import {ThemeConsumer} from './Theme'

const Footer = () =>{

    return(

      <ThemeConsumer>
          {theme => (
               <div className='footer'>
               <footer className={theme + '-theme'}>
                   <p>This is my Footer!</p>
               </footer>
            </div>
          )}
      </ThemeConsumer>
       
    )
}

export default Footer