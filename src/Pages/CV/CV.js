import './CV.scss';
import pdfCV from '../../assets/documents/MaciejTytkoCV.pdf'

export default function CV(){
  return(
    <div className='CV'>
      <iframe src={`${pdfCV}#view=fitH`} title="CV Maciej Tytko" height="100%" width="100%" />
      {/* <iframe src="https://docs.google.com/templatePDF" frameborder="0" height="100%" width="100%"/> */}
    </div>
  );
}