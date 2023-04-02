export const FullScreenImage = ({ imageUrl, onClick }) => {
    console.log(imageUrl);
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75" onClick={onClick}>
            <img src={imageUrl} className="img-thumbnail w-75 h-75" alt={imageUrl} />
        </div>
    );
};