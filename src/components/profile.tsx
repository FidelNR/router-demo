import { Outlet, useParams } from "react-router-dom";
import Mario from "./Mario";
import DefaultProfile from "./DefaultProfile";
import Luigi from "./Luigi";

function Profile (){
    const {name}=useParams();
    return(
        <>
        <div>
            <h1>Profile page</h1>
            <p>Something else...</p>
            {
            name === "mario"?(<Mario/>):
            name==="luigi"?(<Luigi/>):
            (<DefaultProfile/>)
            }
            {/*<Outlet/>*/}
        </div>
        </>
    );
}

export default Profile;

//Incluir en hangman un score con una ruta anidada y que solo diga cuantas vceces ha ganado y perdido y ese componente lo cargamos con una ruta