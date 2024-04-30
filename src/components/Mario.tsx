import { Link, useNavigate } from "react-router-dom";

function Mario (){
    const navegation=useNavigate();
    return(
        <>
        <div>
            <h2>HI I AM MARIO!!!!</h2>
            <nav>
                <li>
                    <ul>
                        <button onClick={() => navegation("/")}>You can to main page by clicking here!!!</button>
                    </ul>
                </li>
            </nav>
        </div>
        </>
    );
};

export default Mario;