'use client'
import Form from 'next/form';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom'
import { useSession, signIn, signOut } from "next-auth/react"

// export default function SearchForm({createPost}) {
//   const [state, action, pending] = useActionState(createPost, false);
//   return (

//   )
// }
function SearchButton() {
  // const [state, action, pending] = useActionState(createPost, false);
  const status = useFormStatus();
  console.log(status ? status: null)
  return (
    <button type="submit">{status.pending ? 'Searching...' : 'Search'}</button>
  )
}



export default function SubmitForm({}) {
  const [query, setQuery] = useState('');
  const { data: session, update } = useSession();
  var updatedSession;
  async function updateSession() {
    console.log(session, 'llllllll');
    await update({
      ...session,
      accountlevel: 'test',
    });
}
console.log(session, 'llllllllk');
  if (session) {
    return (
      <>
        Signed in as {session && session.user ? session.user.email : 'noexist'} <br />
        <button onClick={() => signOut()}>Sign out</button><br/>
        <button onClick={updateSession}>Edit</button>
      </>
    )
  }
 
  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn('', { callbackUrl: 'http://localhost:3000/about' })}>Sign in</button>  Sign in with GitHub */}
      {/* <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/about' })}>Sign in</button>  directly open github login form */}
      <button onClick={() => signIn('', { callbackUrl: 'http://localhost:3000/about' })}>Sign in</button>
    </>
  )



  // var initialState = {
  //   message: ''
  // }
  // console.log('oooop')
  // const [state, action, pending] = useActionState(createPost, initialState);
  // //  const status = useFormStatus(); 
  // console.log(state);
  // return ( 
  //   <form action={action}>
  //       <input name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
  //       {/* <SearchButton/> */}
  //       <button type="submit">{pending ? 'Searching...' : 'Search'} </button>
  //   </form>
  // )
}


// const usePostActionState = ({createPost}) => {
//   const [state, action, pending] = useActionState(createPost, false);

//   return { state, action, pending };
// };

// export default usePostActionState;
// import { signup } from '@/app/actions/auth'
// import { useActionState } from 'react'
 
// export default function SignupForm() {
//   const [state, action, pending] = useActionState(signup, undefined)
 
//   return (
//     <form action={action}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input id="name" name="name" placeholder="Name" />
//       </div>
//       {state?.errors?.name && <p>{state.errors.name}</p>}
 
//       <div>
//         <label htmlFor="email">Email</label>
//         <input id="email" name="email" placeholder="Email" />
//       </div>
//       {state?.errors?.email && <p>{state.errors.email}</p>}
 
//       <div>
//         <label htmlFor="password">Password</label>
//         <input id="password" name="password" type="password" />
//       </div>
//       {state?.errors?.password && (
//         <div>
//           <p>Password must:</p>
//           <ul>
//             {state.errors.password.map((error) => (
//               <li key={error}>- {error}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button disabled={pending} type="submit">
//         Sign Up
//       </button>
//     </form>
//   )
// }