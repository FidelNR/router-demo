import { useNavigate } from "react-router-dom";

function Luigi (){
    const navegation=useNavigate();
    return(
        <>
        <div>
            <h2>I AM LUIGI WWUUAAAA</h2>
            <nav>
                <ul>
                    <li>
                    <button onClick={() => navegation("/")}>You can to main page by clicking here!!!</button>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default Luigi;