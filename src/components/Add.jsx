import { Box, Fab, Modal,styled, Tooltip, Typography,Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { Add as AddIcon, DateRange, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const StyledModal = styled(Modal)({
       display: "flex",
       alignItems: "center",
       justifyContent:"center"
})
const UserBox = styled(Box)({
      display: "flex",
      alignItems: "center",
      gap:" 15px",
      marginBottom: "20px"
    
})

const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left:{xs: "calc(50% - 25px)", md: 30}
        }}
        >
        <Fab color="primary" aria-label="add">
        <AddIcon/>
        </Fab>
    </Tooltip>
   
        <StyledModal
          open={open}
          onClose={e=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
          width={400} 
          height={280}
          bgcolor={"background.default"} color={"text.primary"}
          p={5}
          borderRadius={5}
          >
          <Typography  variant="h6" color="grey" textAlign="center">
           Create Post
          </Typography>
          <UserBox>
          <Avatar 
              sx={{width:30, height:30}} 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Typography fontWeight={500} variant="span">Ashwani Patel</Typography>
          </UserBox>
              <TextField sx={{width:"100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's your mind do ?"
              variant="standard"
             />
             <Stack direction="row" gap={1} mt={2} mb={3}>
             <EmojiEmotionsIcon color="primary" />
             <Image color='secondary' />
             <VideoCameraBack color='success' />
             <PersonAdd color='error' />             
             </Stack>
             <ButtonGroup 
              fullWidth
             variant="contained" aria-label="outlined primary button group">
              <Button>Post</Button>
              <Button sx={{width:"100px"}}>
                <DateRange/></Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
    </>
  )
}

export default Add