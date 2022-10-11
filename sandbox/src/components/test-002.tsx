import { useState } from 'react';

export default function Test002() {
  const [input, setInput] = useState("")
  const [user, setUser] = useState({
    name: "john",
    email: "john@gmail.com",
    images: ["profile.png", "cover.png"]
  })

  const changeUser = () => {
    setUser((prev) => ({ ...prev, name: input }))
  }

  return (
    <div className='test'>
      <h2>Test 002: React useState white screen problem fixed</h2>
      <p>
        user :
        <input
          type="text"
          placeholder='enter a new name'
          onChange={e => setInput(e.target.value)}
        />
      </p>
      <button onClick={changeUser}>Change username</button>
      <span>Username is {user.name}</span>
      <hr />
    </div>
  );
}

