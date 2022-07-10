import './ButtonPuzzle.scss'
import Badge from '@mui/material/Badge';

export default function ButtonPuzzle() {

  const clickHandler = ()=>{
    console.log('lol');
  }

  return (
    <div onClick={clickHandler} className='buttonPuzzle'>
      <Badge
        badgeContent="NEW"
        color="secondary"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className='inside'>
          <p>Super Nowy</p>
        </div>
      </Badge>
    </div>
  );
}