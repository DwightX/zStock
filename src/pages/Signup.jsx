import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
import {db} from '../firebase.config'
import { setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {toast} from "react-toastify"
import Oauth from '../components/Oauth'




function Signup() {
const [showPassword,setShowPassword] = useState(false)
const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
})

const{name,email,password} = formData

const navigate = useNavigate()
const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]:e.target.value
    }))
}
const onSubmit = async (e) => {
    e.preventDefault()
    try{
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword
        (auth,email,password)
        const user = userCredential.user
        updateProfile(auth.currentUser,{
            displayName:name,
        })
        const formDataCopy = {...formData} //copying whats in formData State
        delete formDataCopy.password //deleting password from formDataCopy object
        formDataCopy.timestamp = serverTimestamp() // setting timestamp to server timestamp
        await setDoc(doc(db, 'users',user.uid), formDataCopy) //updating database and add user to user collection
        navigate('/')
    }catch(error){
        toast.error("Registration Error")
    }
}

    return (
        <>
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>Welcome Back!</p>
            </header>
            <main>
                <form onSubmit={onSubmit}>

                <input type="text" className='nameInput' placeholder='Name' id='name'
                     value={name} onChange={onChange}/>

                <input type="email" className='emailInput' placeholder='Email' id='email'
                    value={email} onChange={onChange}/>

                    <div className='passwordInputDiv'>
                        <input type={showPassword ? 'text' : 'password'}
                        className='passwordInput'
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={onChange}/>
                        <img src={visibilityIcon} 
                        alt="show password"
                        className='showPassword'
                        onClick={() => setShowPassword((prevState) => !prevState)}
                        />
                    </div>
                    <Link to='/forgot-password' className='forgotPasswordLink'>
                        Forgot Password
                    </Link>
                    <div className='signUpBar'>
                        <p className='signUpText'>
                            Sign Up
                        </p>
                        <button className='signUpButton'>
                            <ArrowRightIcon fill='white' width='34px'height="34px"></ArrowRightIcon>
                        </button>
                    </div>
                </form>
                <Oauth/>
                <Link to="/sign-in" className='registerLink'>
                    Sign in Instead
                </Link>
            </main>
        </div>
        </>
    )
}

export default Signup