import '../assets/styles/stylesContacts.scss';
const Contact= ()=>{

    return(
    <>
    <div className="container-forms">
        
    <form action="#" className="form">
        <h1>
            Contact Us
        </h1>
        <label htmlFor="">Name</label>   
        <input type="text" name="" id="name" className="name" placeholder='Name'  required  minLength="3" maxLength="50" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="email" className="email" placeholder='Email'/>
        <label htmlFor="">Phone</label>
        <input type="text" name="" id="phone" className="phone"  placeholder='phone' required pattern="^\+?[1-9]\d{1,14}$" title="Please enter a valid phone number"/>
        <button>Contact Us</button>

    </form>
    </div>
    </>
    );
};
export default Contact;