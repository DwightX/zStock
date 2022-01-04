import {useLocation, useNavigate} from 'react-router-dom'
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {doc,setDoc,getDoc, serverTimestamp} from 'firebase/firestore'
import {toast} from 'react-toastify'
import {db} from '../firebase.config'
import googleIcon from '../assets/svg/googleIcon.svg'
 
function Oauth() {
    const onGoogleClick = async () => {
        try{
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            //Checking if user is in DB
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //if user doesnt exist creats new user
            if(!docSnap.exists()) {
                await setDoc(doc(db,'users',user.uid),{
                    name:user.displayName,
                    email:user.email,
                    timestamp:serverTimestamp()
                })
            }
            navigate('/')
        }catch(error){
            toast.error('Could not authrize with google')
        }
    }
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='socialLogin'>
            <p>Sign {location.pathname === "/sign-up" ? 'up ' : 'in '} 
             with</p>
            <button onClick={onGoogleClick } className='socialIconDiv'>
                <img className="socialIconImg" src={googleIcon} alt='google' />
            </button>
        </div>
    )
}

export default Oauth
