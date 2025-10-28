import './contact.css'
import Nav from '../components/nav';

function Contact() {
  return (
    <div>
      <Nav showName={true}/>
      <div className="contactContainer">
        <h1 className="contactTitle">Get in touch</h1>
        <div className="contactGrid">
          <a className="contactItem" href="http://discord.com/users/389493547977539604" target="_blank" rel="noreferrer">
            <span className="contactLabel">Discord</span>
            <span className="contactValue">blo.b</span>
          </a>
          <a className="contactItem" href="https://www.linkedin.com/in/andrew-b-chen742" target="_blank" rel="noreferrer">
            <span className="contactLabel">LinkedIn</span>
            <span className="contactValue">linkedin.com/in/andrew-b-chen742</span>
          </a>
          <a className="contactItem" href="mailto:andche742@gmail.com">
            <span className="contactLabel">Email</span>
            <span className="contactValue">andche742[at]gmail[dot]com</span>
          </a>
          <a className="contactItem" href="mailto:andrew.b.chen@sjsu.edu">
            <span className="contactLabel">Email</span>
            <span className="contactValue">andrew.b.chen[at]sjsu[dot]edu</span>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;


