import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
                Ordenar por
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-item">Precio: Mayor a menor</div>
                    <div className="dropdown-item">Precio: Menor a mayor</div>
                    <div className="dropdown-item">Estrellas: Mayor a menor</div>
                    <div className="dropdown-item">Estrellas: Menor a mayor</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;