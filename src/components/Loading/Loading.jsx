/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
/* eslint-disable eqeqeq */
import React , { useState,useEffect } from 'react';
import './Loading.css';

function Loading() {
    const [images, setImages] = useState('fa-codepen');
    const [num , setNum] = useState('0');

    useEffect(() => {
        let counter = 0;
        // Start the changing images every 2 seconds
        setInterval(function() {
          if(counter == 9) { 
            counter = 0; 
          }
      
          changeImage(counter);
          counter++;
        }, 1500);
        // set percentage off
        loading();
    }, []);
      
    function changeImage(counter) {
        let images = [
        'fa-fighter-jet',
        'fa-gamepad',
        'fa-headphones',
        'fa-cubes',
        'fa-paw',
        'fa-rocket',
        'fa-ticket',
        'fa-pie-chart',
        'fa-codepen'
        ];
    setImages(images[counter])
    }

    function loading(){
        for(let i=0; i<=100; i++) {
          setTimeout(function() { 
            setNum(i);
            if(num === 100) {
              loading();
            }
            setNum((prevNum) => prevNum+1);
          },i*70);
        };
    }

  return (
    <div className='loader'>
      <div className='image'>
          <i className={`fa ${images}`}></i>
      </div>
      <span>Welcome!</span>
    </div>
  )
}

export default Loading