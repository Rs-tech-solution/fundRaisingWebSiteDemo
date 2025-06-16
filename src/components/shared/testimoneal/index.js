import { useState, useRef } from 'react';
import styles from './testimoneal.module.scss';
const Testimonials = ({ testimonials, selectedCategory, setSelectedCategory }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const moveForward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex >= testimonials.length) {
                return 0;
            }
            return newIndex;
        });
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const moveBackward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex < 0) {
                return testimonials.length - 1;
            }
            return newIndex;
        });
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.prevButton} onClick={moveBackward}>
                &lt;
            </button>
            <div className={styles.carousel} ref={carouselRef}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`${styles.testimonial} ${index === currentIndex ? styles.active : ''
                            }`}
                        onClick={() => setSelectedCategory(testimonial.text)}
                    >
                        <span>{testimonial.icon}</span> {testimonial.text}
                    </div>
                ))}
            </div>
            <button className={styles.nextButton} onClick={moveForward}>
                &gt;
            </button>
        </div>
    );
};

export default Testimonials;
