
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getStorage, ref , uploadBytes , getDownloadURL    } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
  import { getFirestore , collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5aMfS5UGhEfS21ZzfEON9lhVk0cxnjFo",
    authDomain: "imgprofile-516dd.firebaseapp.com",
    projectId: "imgprofile-516dd",
    storageBucket: "imgprofile-516dd.appspot.com",
    messagingSenderId: "816291024577",
    appId: "1:816291024577:web:130c20800ecfe4f5824e40",
    measurementId: "G-28E2E6C52P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 // Initialize Firebase

 const storage = getStorage(app,);
 console.log('storage', storage);

 const db = getFirestore(app);
console.log('dbbbbb', db);

let profilecollection = collection(db, 'profiles')



 let profile_img = document.getElementById('profile_img')

 let save_file = document.getElementById('save_file')



 save_file.addEventListener('click', ()=>{
    const profileimgstroageref = ref(storage, profile_img.value);
    console.log(profile_img.files[0]);
    uploadBytes(profileimgstroageref, profile_img.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');


        getDownloadURL(profileimgstroageref)
  .then((url) => {
    console.log(url);

  addDoc(profilecollection, {url, category : 'profileimg'}).then(()=>{
    console.log('document updated to the db');
    get()
  })
    })
      }).catch((err)=>{
alert(err)
      });
      
 })

let container = document.getElementById('container')
 get()
async function get() {
  container.innerHTML = "";
 
  const querySnapshot = await getDocs(profilecollection);
querySnapshot.forEach((doc) => {
  console.log(doc.data());

  console.log(doc.data().url);

  let ele = `  <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                           border-2 border-pink-600 p-1" src=${doc.data().url} alt="profile">`
                           

 container.innerHTML += ele

});

}