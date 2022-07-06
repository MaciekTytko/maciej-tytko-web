import './Menu.scss';


export default function Menu() {

  return (
    <div>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li style={{float: 'right'}}><a href="about.asp">About</a></li>
      </ul>
    </div>
  );
}