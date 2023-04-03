export const FullScreenImage = ({ imageUrl, onClick }) => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={imageUrl} className="img-thumbnail w-75 h-75" alt={imageUrl} />
        </div>
    );
};