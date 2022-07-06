import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser'; 

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const ContactWrapper = styled.section`

.contactSec{
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.contactBody{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

h1{
  text-align: left;
  font-size: 2.5rem;
}

.half{
  margin-top: 2rem;
  input{
    width: 25rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: groove ; 
  }
  textarea{
    width: 25rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: groove;
  }
}

.answer{
  margin-top: 2rem;
    width: 15rem;
    padding 0.5rem;
    border-radius: 5px;
    border: groove
}

b:hover{
  cursor: pointer;
}

form{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

b{
  a{
    text-decoration: none;
    color: black;

  }
  a:hover{
    color: blue;
  }
}

button{
  color:white;
  background-color: black;
  margin-top: 2rem;
  width: 10rem;
  border: none;
  border-radius: 5px;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  filter: brightness(180%);
}
`

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(answer.toLowerCase()==='white'){
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setAnswer(''); 
      setEmail('');
      setName('');
      setMessage('');
    }
    else{
      alert('Submission was unsuccessful. Please try security question again.');
      setAnswer('');
    }


  };

  return (
    <ContactWrapper>
      <div className='container'>
        <div className='row contactSec'>
          <div className='contactBody'>
            <article>
              <h1>Contact.</h1>
              <p>Get in touch or shoot me a email directly
                <b><a href="mailto:frankieavina@gmail.com"> frankieavina@gmail.com</a></b>.
              </p>              
            </article>
            <br/>
            <form ref={form} onSubmit={handleFormSubmit}>
              <div className='half smIn'>
                <input type='text' name='user_name' id='user_name' placeholder='Name' 
                  value={name} required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='half smIn'>
                <input type='email' name='user_email' id='user_email' placeholder='Email' 
                  value={email} required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='half'>
                <textarea type='message' name='message' id='message' placeholder='Message' 
                  value={message} rows='10' required
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
              <p> A panda is black and: <input type='text' name='test_question' 
                id='test_question' placeholder='input answer' className='answer' required
                onChange={e => setAnswer(e.target.value)}
                />
              </p>
              <button type='submit'>Send Message</button>
              {/* add reCaptcha  */}
            </form>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Contact