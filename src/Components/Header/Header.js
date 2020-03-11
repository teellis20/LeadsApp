import React, { useState } from "react";
import { Navbar, NavItem, Icon, TextInput, CardPanel, Button } from "react-materialize";
import { Animated } from "react-animated-css";
import "./header.css";
import colors from "../../constants/colors";

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
                    <TextInput id="searchInput"
                        placeholder="Search"
                    />
                    <Button id="searchBttn">
                 <Icon id="searchRight">search</Icon>
                 </Button>
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
                // className="chec"
                alignLinks="right"
                brand={<a
                    className="brand-logo" href="#">Business Right</a>}
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
                    centerLogo: true
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

const styles = {
    header: {
        backgroundColor: colors.primary
    }
}

export default Header;