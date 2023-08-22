// snipet traido con rafc

/* const pages = ["home", "users", "about", "register"]; */
const pages = [
    {name: "home", url: "/"},
    {name: "users", url: "/"},
    {name: "counter", url: "/"},
    {name: "about", url: "/"},
    {name: "register", url: "/"}
];

/*
 Cuando se renderiza una lista de elementos, es importante
 proporcionar una prop "key" única a cada elemento de la lista.
 Esto permite a React realizar una actualización eficiente
 y optimizada de la interfaz de usuario cuando cambia el
 contenido de la lista.

*/

 export const Navbar = () => {
  return (
    <>
        <h4>Ch30</h4>
        <ul>
            {pages.map(page => <li key={page.name}>{page.name}</li> )}
        </ul>
    </>
  )
}
