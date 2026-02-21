import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDoc,updateDoc, getDocs,doc , query , where,limit } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASSUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY
    ),
    isTokenAutoRefreshEnabled: true
  });
}

export async function addFireData(newData) {
    try {
        let itemSended = await addDoc(collection(db, "general-data"),
            newData
        )
        return (itemSended.id)
    } catch (error) {
        throw new Error(`Error registrando el producto: ${error.message}`)
    }
}

export async function getFireData() {
    try {
        const dataToDeliver = []
        const dataQuery = await getDocs(collection(db, "general-data"))
        dataQuery.forEach((e)=>dataToDeliver.push({...e.data(),id:e.id}))
        return dataToDeliver;
    } catch (error) {
        throw new Error(`Error solicitando el/los productos: ${error.message}`)
    }
}

export async function updateGeneralData(element,newData) {
    try {
        await updateDoc(doc(db, "general-data",element),newData)
    } catch (error) {
        throw new Error(`Error registrando la data: ${error.message}`)
    }
}

export async function getGeneralData(element,reqData) {
    try {
        const dbResponse = await getDoc(doc(db,"general-data",element))
        const generalObject = dbResponse.data()
        return generalObject[reqData]
    } catch (error) {
        throw new Error(`Error solicitando la data: ${error.message}`)
    }
}

export async function getUser(email) {
    try {
        const docRef = query(collection(db,"users"),where('email',"==",email),limit(1))
        const dbResponse = await getDocs(docRef)
        const generalObject = dbResponse.docs[0]
        return {id:generalObject.id, ...generalObject.data()}
    } catch (error) {
        throw new Error(`Error solicitando la data: ${error.message}`)
    }
}