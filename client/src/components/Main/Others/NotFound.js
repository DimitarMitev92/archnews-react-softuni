export const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
            <div className="row">
                <div className="col">
                    <h1 className="display-1">404</h1>
                    <h3 className="display-5">Ooops!</h3>
                    <h3 className="display-7">THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.</h3>
                    <button className="btn btn-secondary">Go Back To Home</button>
                </div>
            </div>
        </div>
    );
};