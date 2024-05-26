import { useState } from "react";
import { useAuth } from "../store/authContext";


const Register = () =>{
    const [user, setUser] = useState({
        username: "",
        email: "",
        weight: "",
        height: "", 
        gender: "",
        age: "",
        activity_level: "",
        deitary_preference: "",
        health_goals: "",
        phone: "",
        password: ""
         // Added gender to user state 
    });

    const updateUser = (event) =>{
        let target = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [target]: value
        });
    }    

    const {setLocalStoragetoToken} = useAuth();


    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/register", { //creating POST req to the backend 
            headers:{
                "Content-Type": "application/json"           
            },
            method: "POST",
            body:JSON.stringify(user) //converting user to JSON format
        });

        const res_token = await response.json();
        

            if(response.ok){
                setUser(
                    {
                        username: "",
                        email: "",
                        weight: "",
                        height: "",
                        gender: "",
                        age: "",
                        activity_level: "",
                        deitary_preference: "",
                        health_goals: "",
                        phone: "",
                        password: ""
                })             
                const getToken = res_token.token;
                // console.log(getToken);
                setLocalStoragetoToken(getToken);
            }else{
                console.log(res_token.extraDetailedMessage);
                alert(res_token.message);
            }
            // console.log(response);
        } catch (error) {
            console.log("register", error);
        }
    }

    return (
      <>
        <section>
          <div className="heading">Registration Form</div>
          <div className="container">
            <div className="side-image">HEllo</div>
            <div className="register-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="Enter your Username"
                    autoComplete="off"
                    value={user.username}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    required
                    placeholder="Enter your weight"
                    value={user.weight}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="height">Height</label>
                  <input
                    type="text"
                    name="height"
                    required
                    placeholder="Enter your height"
                    value={user.height}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    required
                    placeholder="Enter your gender"
                    value={user.gender}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label>Gender:</label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={user.gender === "male"}
                      onChange={updateUser}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={user.gender === "female"}
                      onChange={updateUser}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={user.gender === "other"}
                      onChange={updateUser}
                    />
                    Other
                  </label>
                </div>
                <div>
                  <label htmlFor="activity_level">Age</label>
                  <input
                    type="number"
                    name="age"
                    required
                    placeholder="Enter your Age"
                    value={user.age}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="activity_level">Activity Level</label>
                  <input
                    type="text"
                    name="activity_level"
                    required
                    placeholder="Enter your activity_level"
                    value={user.activity_level}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="deitary_preference">Deitary Preference</label>
                  <input
                    type="text"
                    name="deitary_preference"
                    required
                    placeholder="Enter your deitary_preference"
                    value={user.deitary_preference}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="health_goals">Health Goals</label>
                  <input
                    type="text"
                    name="health_goals"
                    required
                    placeholder="Enter your health_goals"
                    value={user.health_goals}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    required
                    placeholder="Enter your Phone number"
                    value={user.phone}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your Password"
                    value={user.password}
                    onChange={updateUser}
                  ></input>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}

export default Register;