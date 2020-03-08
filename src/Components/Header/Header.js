import React, { useState } from "react";
import { Navbar, NavItem, Icon, TextInput, CardPanel, SideNav, SideNavItem } from "react-materialize";
import { Animated } from "react-animated-css";
import "./header.css";

const Header = props => {

    const [searchDrop, setSearchDrop] = useState(false);

    // const searchStyle = {
    //     search: {
    //         width: '80%',
    //         marginLeft: '10%'
    //     }
    // }

    let searchClass = "hideSearch";
    let searchIcon = "search";

    const SearchDropDown = () => {
        return (
            <div 
            // style={searchStyle.search}
            className={searchClass}
            >
                <CardPanel>
                    <Icon >search</Icon>
                    <TextInput
                        // icon="search"
                        placeholder="Search"
                    />
                </CardPanel>
            </div>
        )
    };

    const searchSwitch = () => {
        if (!searchDrop) {
            setSearchDrop(true);
        } else {
            setSearchDrop(false);
        }
    }

    if (!searchDrop) {
        // searchStyle.search.visibility = "hidden";
        searchClass = "hideSearch";
        searchIcon = "search";
    } else {
        // searchStyle.search.visibility = "visible";
        searchClass = "showSearch";
        searchIcon = "close";
    }


    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<a
                    className="brand-logo" href="#">Name Goes Here</a>}
                menuIcons={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: "left",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true,
                }}
            >
                <NavItem href="#">
                    Getting started
            </NavItem>
                <NavItem href="#">
                    Categories
            </NavItem>
                <NavItem className="sidenav-close" href="#"
                    onClick={() => searchSwitch()}
                >
                    <Icon>{searchIcon}</Icon>
                </NavItem>
            </Navbar>
            <Animated
                animationIn="bounceInRight" animationOut="zoomOut" isVisible={searchDrop} animationInDuration={500} animationOutDuration={500}
            >
            <SearchDropDown />
            </Animated>
        </div>
    )
};

// const styles = {
//     navLogo: {
//         marginLeft: '2%'
//     }
// }

export default Header;