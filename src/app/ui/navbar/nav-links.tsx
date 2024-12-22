import Link from "next/link";
import './navbar.css'
const links = [
    { name: 'Ventas', href: '/home/ventas', icon: 'pi pi-shopping-bag' },
    { name: 'Inventario', href: '/home/inventario', icon: 'pi pi-box'},
    {name: 'Insumos', href: '/home/insumos', icon: 'pi pi-th-large'},
    {name: 'Produccion', href: '/home/produccion', icon: 'pi pi-upload'},

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