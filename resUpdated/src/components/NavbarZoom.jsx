import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import '../css/main.css';

const NavItem = ({ item, onNavClick }) => {
    if (!item) {
        return null;
    }

    return (
        <li>
            {item.children ? (
                <>
                    <NavLink to={item.href} activeclassname="active" onClick={() => onNavClick(item.href)}>
                        {item.text}
                    </NavLink>
                    <ul>
                        {item.children.map((child) => (
                            <li key={child.href}>
                                <NavLink to={child.href} activeclassname="active" onClick={() => onNavClick(child.href)}>
                                    {child.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <NavLink to={item.href} activeclassname="active" onClick={() => onNavClick(item.href)}>
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
    onNavClick: PropTypes.func.isRequired,
};

const NavbarZoom = () => {
    const [isZooming, setIsZooming] = useState(false);
    const navigate = useNavigate();

    const [springProps, setSpringProps] = useSpring(() => ({
        transform: 'scale(1)',
        config: { mass: 1, tension: 280, friction: 60 }
    }));

    const handleNavClick = (href) => {
        setIsZooming(true);
        setSpringProps({
            transform: 'scale(20)',
            onRest: () => {
                navigate(href);
                setTimeout(() => {
                    setSpringProps({ transform: 'scale(1)' });
                    setIsZooming(false);
                }, 100);
            }
        });
    };

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
        <animated.div style={springProps} className="nav-container">
            <nav className={`nav05 ${isZooming ? 'zooming' : ''}`}>
                <ul>
                    {navItems.map((item) => (
                        <NavItem key={item.href} item={item} onNavClick={handleNavClick} />
                    ))}
                </ul>
            </nav>
        </animated.div>
    );
};

export default NavbarZoom;