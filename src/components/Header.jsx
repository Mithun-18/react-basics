function HeaderItem({name}){
    return (
        name &&
            <div>Name: {name}</div>
        
    );
}


export default function Header({ items}){
    return (
        <div style={{backgroundColor:'black', color:'white', display:'flex', justifyContent:'space-between',padding:16}}>
           {
                items.map((name1)=>{
                    console.log({name1})
                   return <HeaderItem name={name1} />
                }
                )
           }
        </div>
    );
}