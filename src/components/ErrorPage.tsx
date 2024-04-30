import { Link, useNavigate } from "react-router-dom";

function ErrorPage(){
    const navegation=useNavigate();
    return(
        <>
            <div>
                <h1>Sorry, this page doesn't exist!!!</h1>
                <button onClick={() => navegation("/")}>You can to main page by clicking here!!!</button>

                
            </div>
        </>
    );
};

export default ErrorPage;