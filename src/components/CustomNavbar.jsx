
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/main.css';



const NavItem = ({ item }) => {
    if (!item) {
        return null;
    }

    return (
        <li>
            {item.children ? (
                <>
                    <NavLink to={item.href} activeclassname="active">
                        {item.text}
                    </NavLink>
                    <ul>
                        {item.children.map((child) => (
                            <li key={child.href}>
                                <NavLink to={child.href} activeclassname="active">
                                    {child.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <NavLink to={item.href} activeclassname="active">
                    {item.text}
                </NavLink>
            )}
        </li>
      
    );
};

NavItem.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    }).isRequired,
};





const CustomNavbar = () => {
    const navItems = [
        { href: "/other", text: "Other" },
        { href: "/about", text: "About" },
        {
            href: "",
            text: "Projects",
            children: [
                { href: "/project1", text: "Forms" },
                { href: "/project2", text: "Database" },
                { href: "/project3", text: "Tools" },
            ]
        },
        { href: "/contact", text: "Contact" },
        { href: "/education", text: "Education" }
    ];

    return (
     
   
        <nav className="nav05">
            <ul>
                {navItems.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
       
     
    );
};

export default CustomNavbar;