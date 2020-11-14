import React from 'react'
import './SidebarOption.css';

//Icon is a component so must use cap
function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
