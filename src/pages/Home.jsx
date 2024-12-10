import '../assets/styles/stylesHome.scss';
import { useNavigate } from 'react-router-dom';
import laptop from'../assets/features/laptop1.png';
import keyboard from'../assets/features/keyboard1.png';
import gpu from'../assets/features/gpu1.png';
const Home = ()=>{
    const navigate = useNavigate(); // Hook para redirigir

    const handleCardClick = (productId) => {
        navigate(`/product/${productId}`); // Redirigir a la ruta del producto
    }
    const handlebuttonClick = () => {
        navigate(`/contact`); // Redirigir a la ruta del producto
    }
    return (
        <>
        <div className="container">
            <div className="title">
                <h1>
                    Welcome to Quantum Gadgets
                </h1>

            </div>
            <div className="information">
                <h2>
                    Our Quantum Gadgets are designed to revolutionize 
                    your everyday life with cutting-edge technology.
                </h2>
                <h2>
                    We are dedicated to providing you with the best possible
                    solutions for your unique needs.
                </h2>
                <h2>
                    Our Quantum Gadgets are not just a collection of gadgets,
                    they are a tool that will help you live a more fulfilling and
                    peaceful life.
                </h2>

            </div>
            <div className="features">
                <div className='card'>
                    <div className='feature' onClick={() => handleCardClick('laptop')}>
                        <img src={laptop} alt="Laptop" />
                        <h3>Feature 1</h3>

                    </div>
                    <div className='feature' onClick={() => handleCardClick('keyboard')}>
                        <img src={keyboard} alt="Keyboard" />
                        <h3>Feature 2</h3>

                    </div>
                    <div className='feature' onClick={() => handleCardClick('gpu')}>
                        <img src={gpu} alt="GPU" />
                        <h3>Feature 3</h3>

                    </div>

                </div>
            </div>
            <div className="moreinfo">
                <h3>
                    Learn More About this producto Contact Us a Quantum Gadgets
                </h3>
                <button onClick={() => handlebuttonClick()}>Contact Us</button>


            </div>


        </div>
        </>


    );


};
export default Home;