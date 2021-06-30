import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDt6bqUvOG2_rpzqjwKuYNk9-zA4rQO_I4",
    authDomain: "black-market-d4c81.firebaseapp.com",
    projectId: "black-market-d4c81",
    storageBucket: "black-market-d4c81.appspot.com",
    messagingSenderId: "988570681249",
    appId: "1:988570681249:web:322ce6dfa215612cabd5e0",
    measurementId: "G-QST94LNWR7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const getAllUsers = () => {
    let allUsers = [];
    firestore.collection('users').get().then((snapShot)=>{
        snapShot.docs.forEach(doc => {
            const element = doc.data();
            allUsers.push(element);
        })
    }).catch(error=>console.log(error));
    return allUsers;
};

export const getUser = (uid) => {
    firestore.collection('users').doc(uid).get().then((snapShot) => {
        return snapShot.data();
    });
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});



export default firebase;