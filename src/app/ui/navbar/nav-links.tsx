import Link from "next/link";
import './navbar.css'
const links = [
    { name: 'ventas', href: '/', icon: 'pi pi-shopping-bag' },
    { name: 'galletas', href: '/galletas', icon: 'pi pi-box'},
    {name: 'insumos', href: '/insumos', icon: 'pi pi-th-large'},
    {name: 'Produccion', href: '/produccion', icon: 'pi pi-upload'},

]



export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (

                
                       <li key={link.name} >
                        <i className= {`${link.icon}`} style={{ fontSize: '2rem' }}></i><Link href={link.href} className="link">{link.name}</Link>
                       </li> 
      

                );
            })}
        </>
    )
}