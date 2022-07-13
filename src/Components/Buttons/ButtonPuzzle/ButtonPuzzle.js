import './ButtonPuzzle.scss'
import Badge from '@mui/material/Badge';

export default function ButtonPuzzle() {

  const clickHandler = () => {
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
        sx={{ width: '100%', 
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <div className='inside'>
          <p>Super Nowy</p>
        </div>
      </Badge>
    </div>
  );
}