import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ProductDisplay.scss';

const ProductDisplay = ({ product }) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);


    const [color, setColor] = useState("rgb(164, 90, 82)")
    const click = color => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color;

    }, [color]);


    useEffect(() => {
        const activeImage = document.querySelector(".productdisplay-img .productdisplay-main-img");
        const activeGalleryImage = document.querySelector(".productdisplay-img-list .gallery1");
        const productImages = document.querySelectorAll(".productdisplay-img-list img");
        const productColorImages = document.querySelectorAll(".productdisplay-color-list img");

        function changeImage(e) {
            activeImage.src = e.target.src;
        }

        function changeGalleryImage(e) {
            activeGalleryImage.src = e.target.src;
        }

        productImages.forEach(image => image.addEventListener("click", changeImage));
        productColorImages.forEach(image => image.addEventListener("click", changeImage));
        productColorImages.forEach(image => image.addEventListener("click", changeGalleryImage));

        return () => {
            productImages.forEach(image => image.removeEventListener("click", changeImage));
            productColorImages.forEach(image => image.removeEventListener("click", changeImage));
            productColorImages.forEach(image => image.removeEventListener("click", changeGalleryImage));
        };
    }, [product]);

    const imgEnter = () => setCursorVariant("img");
    const imgLeave = () => setCursorVariant("default");

    const variants = {
        default: {
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
        },
        img: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "rgba(219, 48, 105)",
            mixBlendMode: "difference"
        }
    };


    // const [buttonColor, setButtonColor] = useState("rgb(164, 90, 82)");

    // const handleColorChange = color => {
    //     setButtonColor(color);
    // }

    // useEffect(() => {
    //     document.body.style.backgroundColor = buttonColor;

    // }, [buttonColor]);


    return (
        <div className='productdisplay'>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
            />
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} className='gallery1' src={product.image1} alt="" />
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image2} alt="" />
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image3} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-price">${product.price}</div>
                <div className="productdisplay-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iste blanditiis itaque cum dignissimos. Voluptatem eos excepturi officiis tenetur, incidunt qui nisi quas, unde veniam veritatis debitis vel facilis! Impedit.
                </div>
                <div className="productdisplay-right-color">
                    <h1>Select Color : </h1>
                    <div className="color-groups">
                        <div className="productdisplay-color-list">
                            <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} onClick={() => click("rgb(164, 90, 82)")} src={product.image1} alt="" />
                            <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} onClick={() => click("rgb(238, 232, 170)")} src={product.image4} alt="" />
                            <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} onClick={() => click("orange")} src={product.image5} alt="" />
                        </div>
                    </div>
                    <div className="cart">
                        <button type="button"  className="add">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDisplay;
