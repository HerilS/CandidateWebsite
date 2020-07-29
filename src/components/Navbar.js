import React, { useEffect, useState } from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  withStyles,
} from "@material-ui/core/styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import CloseIcon from "@material-ui/icons/Close"
// Drawer Icons
import BookRoundedIcon from "@material-ui/icons/BookRounded"
import InfoRoundedIcon from "@material-ui/icons/InfoRounded"
import GavelRoundedIcon from "@material-ui/icons/GavelRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Divider } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

// Images
import Instagram from "../img/instagram.svg"
import Twitter from "../img/twitter.svg"
import LinkedIn from "../img/linkedIn.svg"

//Styles
const drawerWidth = 240
const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      backgroundColor: "transparent",
      textTransform: "none",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
    },
    linkContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "1rem",
    },
    itemContainer: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#7A8DFF",
      
    },
    inactive: {
      opacity: "50%",
      textDecoration: "none",
      paddingRight: "2.5rem",
      paddingLeft: "2.5rem",
      fontSize: "1.1rem",
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      color: "white",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    nameContainer: {
      paddingTop: "1rem",
      position: "absolute",
      paddingLeft: "2.3rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "1.2rem",
    },
    active: {
      opacity: "100%",
      paddingBottom: "0.5rem",
      background: "linear-gradient(to right, #65ACED, #7A8DFF) no-repeat",
      backgroundSize: "30% 3px",
      backgroundPosition: "bottom",
    },
    appBarMobile: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        display: "block",
      },
      background: "transparent",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
      color: "white",
      marginLeft: "0.25rem",
      marginTop: "0.2rem",
    },
    sideBarActive: {},
    sideBarInactive: {
      color: "white",
      opacity: "80%",
    },
    sideBarText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
    },
    sideBarName: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      color: "white",
      paddingLeft: "1rem",
      fontSize: "2.5rem",
      lineHeight: "2.7rem",
      marginBottom: "0.6rem",
    },
    socials: {
      position: "absolute",
      top: 0,
      right: 0,
      paddingTop: "0.5rem",
      marginRight: "0.5rem",
    },
    socialIcons: {
      paddingLeft: "2rem",
      textDecoration: "none",
      border: 0,
      boxShadow: "none",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    socialIconsInner: {
      width: "3rem",
    }
  })
)

export default function Navbar() {
  const classes = useStyles()

  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon />,
      link: "/",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "About",
      icon: <InfoRoundedIcon />,
      link: "/about",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "Blog",
      icon: <BookRoundedIcon />,
      link: "/blog",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "Initiatives",
      link: "/initiatives",
      icon: <GavelRoundedIcon />,
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]

  const Contact = [
    {
      text: "Contact",
      link: "/contact",
      icon: <EmailRoundedIcon />,
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]
  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={classes.sideBarName}>
          Rajah <br />
          Maggay.
        </div>
        <Divider />
        {itemsList.map((item, index) => {
          const { text, icon, link, onClick } = item
          return (
            <AniLink
              to={link}
              paintDrip
              hex="#7A8DFF"
              duration={0.5}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </AniLink>
          )
        })}
        <Divider />
        {Contact.map((item, index) => {
          const { text, icon, link, onClick } = item
          return (
            <AniLink
              to={link}
              paintDrip
              hex="#7A8DFF"
              duration={0.5}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </AniLink>
          )
        })}
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <div className={classes.itemContainer}>
          <div className={classes.nameContainer}>Rajah Maggay.</div>
          <div className={classes.linkContainer}>
            <AniLink
              to="/"
              paintDrip
              hex="#65ACED"
              duration={0.5}
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Home
            </AniLink>
            <AniLink
              to="/about"
              paintDrip
              hex="#6CA2F3"
              duration={0.5}
              className={classes.inactive}
              activeClassName={classes.active}
            >
              About
            </AniLink>
            <AniLink
              to="/blog"
              paintDrip
              hex="#7397F9"
              duration={0.5}
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Blog
            </AniLink>
            <AniLink
              to="/initiatives"
              hex="#7A8DFF"
              duration={0.5}
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Initiatives
            </AniLink>
          </div>
        </div>
      </AppBar>

      <AppBar position="fixed" className={classes.appBarMobile} elevation={0}>
        <IconButton
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/rajahmaggay/"
            rel="noopener noreferrer"
            target="_blank" 
            className={classes.socialIcons}
          >
            <img src={LinkedIn} className={classes.socialIconsInner} alt="LinkedIn"/>
          </a>
<a
              href="https://twitter.com/RajahMaggay"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.socialIcons}
            >
              <img src={Twitter} className={classes.socialIconsInner} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/rajahmaggay/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.socialIcons}
            >
              <img src={Instagram} className={classes.socialIconsInner} alt="Instagram" />
            </a>
        </div>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className={classes.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  )
}
