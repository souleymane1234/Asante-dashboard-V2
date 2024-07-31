"use client";
import styles from './styles/login.module.css'
import React, {useState} from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const test = (event) => {
  //   event.preventDefault(); 
  //   console.log("eventssssssssss test ", event);
  // }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  async function sendData(event) {
    console.log("evennnnň", event)
    event.preventDefault(); 

    setLoading(true);
    setError('');
    try {
      const response = await fetch("https://production-api-rest-a-sante.ovh.syabe-tech.com/api/v1/connect", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.status) {
        console.log('User logged in:', data.data);
        router.push(`/dashboard/${[name]}?name=${data.data.username}`)
      } else {
        setError(data.message || 'La connexion a échoué');
      }
    } catch (error) {
      setError('Une erreur s\'est produite. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className={styles.container}>
        <form onSubmit={sendData} className={styles.form}>
        <h1 className='text-center font-bold text-2xl'>Connexion</h1>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Nom d'utilisatuer"  disabled={loading}/>
        <div className='mt-4 flex flex-col relative'>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id="password" placeholder="Mot de passe"  disabled={loading}/>
                <img
                  src={showPassword ? '/eye-removebg-preview.png' : '/eye-close-removebg-preview.png'}
                  className="absolute right-3 translate-y-1/3 cursor-pointer "
                  width="50" height="50"
                  onClick={togglePasswordVisibility}
                  alt="Toggle Password Visibility"
                />
        </div>
        <div className='mt-8 flex flex-col items-center justify-center'>
                {loading ? (
                  <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-teal-600" viewBox="0 0 100  101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" disabled={loading}>Connexion</button>
                )}
              </div>
              {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </main>
  );
  
}

