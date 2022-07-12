import "./styles.css";
import { AiFillHome  } from "react-icons/ai";
import { BiMessageRoundedDetail  } from "react-icons/bi";
import {  BiAddToQueue } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
/* import { BsSearch } from "react-icons/bs"; */




export const Header = () => {
  return (
    <div className="container">
      <img src="/assets/image/logo.png" alt="logo" className="imgLogo" />
      
      <input type="search" placeholder=" Pesquisar" className="inputSearch"/>

      <div className="icons">
        <AiFillHome size={25}/>
        <BiMessageRoundedDetail size={25}/>
        <BiAddToQueue size={25}/>
        <MdOutlineExplore size={25}/>
        <AiOutlineHeart size={25}/>
      </div>
        <img src="/assets/image/imgPerfil.jpg" alt="fotoPerfil" className="imgPerfil"/>
    </div>
  );
};
