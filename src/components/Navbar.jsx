import styled from '@emotion/styled'
import Badge from '@mui/material/Badge';
import { Code} from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar =styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("Box")(({theme}) => ({
  display:"none",
  alignItems: "center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled("Box")(({theme}) => ({
  display:"flex",
  alignItems: "center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography varient='h6' sx={{display:{xs:"none", sm:"block"}}}>Ashwani</Typography>
            <Code sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon/>
              </Badge>
              <Avatar sx={{width:30, height:30}} 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              onClick={e=>setOpen(true)}
              />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
            <Avatar sx={{width:30, height:30}} 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
             <Typography variant='span'>Patel</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar