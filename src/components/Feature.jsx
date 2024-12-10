import { useParams, useNavigate  } from 'react-router-dom';
import { useState } from 'react'; // Para manejar el estado
import products from '../data/Products'; 
import '../assets/styles/stylesProduct.scss';

const Feature = () => {
    const { productId } = useParams(); // Obtener el parámetro dinámico de la URL
    const product = products[productId]; // Buscar el producto basado en el ID

    const navigate = useNavigate();
    // Si no se encuentra el producto
    if (!product) {
        return <h2>Producto no encontrado</h2>; // Manejo básico de error
    }

    // Estado para la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(product.images[0]); // Por defecto, la primera imagen

    // Función para manejar el cambio de imagen al hacer clic
    const handleImageClick = (image) => {
        setSelectedImage(image); // Cambiar la imagen seleccionada
    };
    const handlebuttonClick = () => {
        navigate(`/contact`); // Redirigir a la ruta del producto
    }
    return (
            <div className="product-details">
        <h1>{product.name}</h1>

        {/* Contenedor para la imagen principal y la descripción */}
        <div className="containerDetails">
            {/* Imagen principal */}
            <div className="main-image">
                <img src={selectedImage} alt="Imagen principal" />
            </div>

            {/* Descripción */}
            <div className="description-container">
                <p>{product.description}</p>
            </div>
        </div>

        {/* Contenedor de imágenes pequeñas */}
        <div className="images-container">
            {product.images.map((image, index) => (
                <div 
                    key={index} 
                    className="image-item" 
                    onClick={() => handleImageClick(image)}
                >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
            ))}
        </div>
        <div className="moreinfo">
                <h3>
                    Learn More About this producto Contact Us a Quantum Gadgets
                </h3>
                <button onClick={() => handlebuttonClick()}>Contact Us</button>

            </div>
    </div>
    );
};

export default Feature;
