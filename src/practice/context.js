import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown');
function Context() {

  const [name, setName] = useState('mike');

  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting(){
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
  
}

export default Context;

