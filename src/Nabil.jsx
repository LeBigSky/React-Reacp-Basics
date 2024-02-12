
function Nabil( {etage1, etage2, fonction} ) {
    // le props "fonction" c'est la fonction increment qui se trouve dans app, passé en props

    // un des 3 props, ci dessous
    console.log( etage1 )
    // si je console etage1 j'obtiens bien la valeur lié. 
    // Car les { } permettent de récupérer mes variables en props directement, c'est a dire  avoir a faire d'abord appel au nom de paramètre comme ceci: props.variable
    // Si au lieu des { } j'avais
    return(
        <div style={{ border:"2px solid red"}}>
            <h1>{etage1}</h1>
           <h2>{etage2}</h2> 
           {/* STATE ET GESTION D'EVENT */}
           {/* le state se trouve dans app. On a passé la fonction "increment" depuis app, vers Nabil et c'est d'ici, qu'on la lance la fonction a l'aide d'un evenement onclick */}
           <button onClick={fonction}>+</button>
        </div>
    )
}

export default Nabil