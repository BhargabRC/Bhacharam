import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ProductDisplay.scss';

const ProductDisplay = ({ product }) => {

    useEffect(() => {
        const activeImage = document.querySelector(".productdisplay-img .productdisplay-main-img");
        const productImages = document.querySelectorAll(".productdisplay-img-list img");

        function changeImage(e) {
            activeImage.src = e.target.src;
        }

        productImages.forEach(image => image.addEventListener("click", changeImage));

        return () => {
            productImages.forEach(image => image.removeEventListener("click", changeImage));
        };
    }, [product]);


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

    return (
        <div className='productdisplay'>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
            />
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image1} alt="" />
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image2} alt="" />
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image3} alt="" />
                    <img onMouseEnter={imgEnter} onMouseLeave={imgLeave} src={product.image4} alt="" />
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
                    <h1>Color:</h1>
                    <div className="productdisplay-right-colors">
                        <div className="clearfix"></div>
                        <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked />
                        <label className="first-color" htmlFor="color-1"></label>
                        <input className="color-btn for-color-2" type="radio" id="color-2" name="color-btn" />
                        <label className="color-2" htmlFor="color-2"></label>
                        <input className="color-btn for-color-3" type="radio" id="color-3" name="color-btn" />
                        <label className="color-3" htmlFor="color-3"></label>
                        <div className="clearfix"></div>
                    </div>
                    <div className="info-wrap">
                        <a href="#" className="btn"><i className="uil uil-shopping-cart icon"></i> Add To Cart</a>
                    </div>
                    <div className="img-wrap chair-1"></div>
                    <div className="img-wrap chair-2"></div>
                    <div className="img-wrap chair-3"></div>
                    <div className="back-color"></div>
                    <div className="back-color chair-2"></div>
                    <div className="back-color chair-3"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
