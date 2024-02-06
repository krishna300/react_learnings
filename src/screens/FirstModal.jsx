import React from 'react'
//
import post_mb from '../assets/post_mb.jpg';
import post_pk from '../assets/post_pk.jpg';
import post_prabhas from '../assets/post_prabhas.jpg';
import post_aa from '../assets/post_aa.jpg';
import post_rc from '../assets/post_rc.jpg';

const FirstModal = () => {

  const images = [
    {
      id:1,
      src:post_aa
    },
    {
      id:2,
      src:post_pk
    },
    {
      id:3,
      src:post_prabhas
    },
    {
      id:4,
      src:post_mb
    },
    {
      id:5,
      src:post_rc
    }
  ]
  return (
    <div>
      <h2 style={{textTransform: 'capitalize'}}>Gundata</h2>
      {images.map((actor) =>{
        return(<>
          <img 
            width="200px" height="200px"
            src={actor.src}
            style={{borderRadius:'12px'}}  
          />
        </>)
      })}
    </div>
  )
}

export default FirstModal