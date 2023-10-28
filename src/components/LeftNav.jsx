export default function LeftNav({names}){
    return(
          <div style={{display:"flex",justifyContent:"space-around",width:"75%"}}>
         
            {  
                    names.names.map((names) =>
                    <div> name: {names}</div>
                )
            }

        </div>

    )

}