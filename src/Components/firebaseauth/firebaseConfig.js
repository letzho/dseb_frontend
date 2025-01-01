import { initializeApp } from 'firebase/app';
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAppowM5diojzKBohpiXdLdOtYmEzOGwtc",
    authDomain: "chatbotai-3a69d.firebaseapp.com",
    projectId: "chatbotai-3a69d",
    storageBucket: "chatbotai-3a69d.firebasestorage.app",
    messagingSenderId: "673240941868",
    appId: "1:673240941868:web:2b35aa72d1765c64141889"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            
        };
    } catch (error) {
        throw error;
    }
};

export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);

export { auth, db, provider };
export const createUserDocumentFromAuth=async(user)=>{
    const userDocRef=doc(db,"users",user.uid);
    const userDocSnap=await getDoc(userDocRef);
    if(!userDocSnap.exists()){
        const {displayName,email}=user;
        const createdAt=new Date();
        try{
            await setDoc(userDocRef,{displayName,email,createdAt});
        }catch(error){
            console.log(error);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const resetUserPassword = async (email) => {
  if (!email) return;
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    throw error;
  }
};
