export default function RightNav(){
    return(
        <div style={{display:"flex",gap:4,justifyContent:"flex-end"}}>
            <input type="text" style={{padding:8,borderRadius:8}} />
            <button style={{borderRadius:16}}>Search</button>
        </div>
    );

}