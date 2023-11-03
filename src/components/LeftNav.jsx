import './LeftNav.css';
export default function LeftNav({names}){
    return(
          <div style={{display:"flex",justifyContent:"space-around",width:"75%"}}>
         
            {  
                    names.names.map((names) =>
                    <span className="LeftNav"> {names}</span>
                )
            }

        </div>

    )

}