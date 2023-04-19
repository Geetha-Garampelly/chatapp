import React, { useState } from 'react'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore";


import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



import add1 from "../img/add1.png"
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value)

    const userName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {

      const res = await createUserWithEmailAndPassword(auth, email, password)

      console.log(res, "33333333")

      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL
            })

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          });
        }
      );


    } catch (err) {
      setErr(true)
    }

  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <span className='logo'>Chat Application</span>
        <span>Register</span>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='userName' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: "none" }} type='file'id='file'/>
          <label htmlFor='file'>
            <img src={add1} alt='' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register