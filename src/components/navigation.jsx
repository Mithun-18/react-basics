import Logo from "./Logo";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";


export default function Navigation(props){
    return(
        <div style={{display:"flex",backgroundColor:"black",color:"White",padding:16,justifyContent:"flex-start"}}>
          <Logo></Logo>
          <LeftNav names={props}></LeftNav>
          <RightNav></RightNav>
        </div>
          
    );
}