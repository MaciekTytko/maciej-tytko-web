import { Chip } from "@mui/material";



export default function Hashtag(props){

  return(
    <Chip variant="outlined" size="small" label={'#' + props.tag} />
  )
}

