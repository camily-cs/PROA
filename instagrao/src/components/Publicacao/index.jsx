import "../Publicacao/style.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export const Publicacao = () => {
    return(
        <div className="containerPub">
            <div className="headerPub">
                <img src="/assets/image/user1.jfif" alt="perfilUser1" className="imgPerfilUser"/>
                <h3>zayn</h3>
                <AiOutlineEllipsis size={30} className="iconHeaderPub"/>
            </div>

            <div>
                <img src="/assets/image/pub1.jfif" alt="" className="imgPub"/>
            </div>
            
            <div className="iconsPub">
                <AiOutlineHeart />
                <p>icon1</p>
                <p>icon1</p>
            </div>

            <p>Curtido por <b>usuarioInstagram</b> e <b>outras pessoas</b></p>
            <b>UsuarioInstagram</b> <p>Descrição pub</p>

            <p className="tempoPub">HÁ 1 HORA</p>
        </div>
    )
}