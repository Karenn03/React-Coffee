import React, { useState } from 'react';
import './CommentsSection.css';
import CommentBox from '../Comment Box/CommentBox';
import comentario1 from '../../assets/img/comentario-1.png';
import comentario2 from '../../assets/img/comentario-2.jpeg';
import comentario3 from '../../assets/img/comentario-3.jpg';

const CommentsSection = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Captura la fecha y hora actual
        const now = new Date();
        const date = now.toISOString().split('T')[0]; // Solo la fecha en formato YYYY-MM-DD

        // Formulario enviado (simulación)
        const formData = {
            rating: rating,
            comment: comment,
            date: date,
        };

        // Aquí iría el fetch a la URL del servidor para enviar el formulario
        console.log('Enviando comentario:', formData);

        // Limpiar el formulario y cerrar
        setComment('');
        setRating(5);
        setIsFormVisible(false);
        alert('Comentario enviado con éxito.');
    };

    return (
        <>
            <div className="vertical-line" />
            <div className="reviews-section">
                <h2>COMENTARIOS</h2>
                <h4>¡Tu opinión también cuenta!</h4>
                <div className="summary">
                    <div className="overall-rating">
                        <span className="rating-number">4,5</span>
                        <span className="stars">★★★★★</span>
                        <span className="total-reviews">29156 Reseñas</span>
                    </div>
                    {/* ... Resto de la estructura de la sección de comentarios */}
                </div>
                <div className="buttons">
                    <button className="review-button" onClick={toggleFormVisibility}>
                        {isFormVisible ? 'Ocultar formulario' : 'Escribir una Reseña'}
                    </button>
                    <div className="right-buttons">
                        <button className="filter-button">Filtrar</button>
                        <button className="sort-button">Ordenar</button>
                    </div>
                </div>

                {isFormVisible && (
                    <div className="comment-form-container">
                        <h3>Deja tu comentario</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="user-rating">Calificación:</label>
                                <select
                                    id="user-rating"
                                    value={rating}
                                    onChange={(e) => setRating(Number(e.target.value))}
                                    required
                                >
                                    <option value={5}>★★★★★</option>
                                    <option value={4}>★★★★☆</option>
                                    <option value={3}>★★★☆☆</option>
                                    <option value={2}>★★☆☆☆</option>
                                    <option value={1}>★☆☆☆☆</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment-text">Comentario:</label>
                                <textarea
                                    id="comment-text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={4}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-button">
                                Enviar Comentario
                            </button>
                        </form>
                    </div>
                )}

                <div className="comments">
                    <CommentBox
                        imageSrc={comentario1}
                        userName="Nicol Vasquez"
                        rating="★★★★☆"
                        commentDate="Hace 1 mes"
                        commentText="Buena atención, muy amables, un sitio bastante acogedor recomendado si gustas de una experiencia diferente, los desayunos son deliciosos."
                    />
                    <CommentBox
                        imageSrc={comentario2}
                        userName="Zareth Blanco"
                        rating="★★★★★"
                        commentDate="Hace un año"
                        commentText="Un local muy amplio y el ambiente es muy tranquilo. El personal es siempre muy amable y la variedad de café lo hace un lugar genial. Cuenta con WiFi y mobiliario adecuado para pasar el rato, trabajar y conversar con amigos. El menú es costoso (más caro que en una sala de onces) pero muy parecidos a los precios de otras franquicias de ese estilo."
                    />
                    <CommentBox
                        imageSrc={comentario3}
                        userName="Alex Ramos"
                        rating="★★★★★"
                        commentDate="Hace 7 meses"
                        commentText="El personal es siempre amable y servicial, y hacen que la experiencia sea aún más agradable. Sus baristas son conocedores y están dispuestos a ayudarte a elegir la bebida perfecta para tu gusto. Ya sea que prefieras un café clásico o una bebida más elaborada, encontrarás una amplia variedad en su menú."
                    />
                </div>
            </div>
        </>
    );
};

export default CommentsSection;