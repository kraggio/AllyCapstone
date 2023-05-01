import React, { useState } from "react";
import React, { useState } from "react";

function Admin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };


function Admin(){
    const adminUser = {
        email: "admin@admin.com", 
        password: "admin123"
    }
    const [user, setUser] = useState({name: "", email: ""});
    const[error,setError] = useState("");

    const Login = details => {
        console.log(details);
        }

        const Logout = () => {
            console.log("Logout");
        }
    return (
        <div className= "administrator">
            {(user.email != "") ? (
                <div className = "welcome">
                    <h2>Welcome, <span>{user.email}</span></h2>
                    <button>Logout</button>
                    </div>
            ):(
               <Login Login={Login} error={error}/> 
            )}

        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Admin;
