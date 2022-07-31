import { useState } from 'react';

export default function Test002() {
  const [input, setInput] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: "",
    images: [""]
  })

  // setUser({
  //   name: "john",
  //   email: "john@gmail.com",
  //   images: ["profile.png", "cover.png"]
  // })

  return (
    <div className='test'>
      <h2>Test 002: React useState white screen problem fixed</h2>
      <p>user : <input type="text" placeholder='enter a new name' /></p>
      <button>Change username</button>
      <span>Username is {user.name}</span>
      <hr />
    </div>
  );
}

