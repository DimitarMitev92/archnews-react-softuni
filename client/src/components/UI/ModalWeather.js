import { Button } from "./Button.js";
import { Image } from "./Image.js";

export const ModalWeather = ({
    onClickClose,
    weatherInfo
}) => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75">
            <div className="modal-dialog">
                <div className="modal-content m-3">
                    <div className="modal-header">
                        <h5 className="modal-title">Weather in {weatherInfo.name}</h5>
                        <Button
                            className="btn-close"
                            onClick={onClickClose}
                        />
                    </div>
                    <div className="modal-body m-3">
                        <p>Temperature: {weatherInfo.main.temp}°C</p>
                        <p>Min temperature: {weatherInfo.main.temp_min}°C</p>
                        <p>Max temperature: {weatherInfo.main.temp_max}°C</p>
                        <p>Feels like: {weatherInfo.main.feels_like}°C</p>
                        <p>Humidity: {weatherInfo.main.humidity}g/m3</p>
                        <p>Pressure: {weatherInfo.main.pressure / 100}hPa</p>
                        <p>Wind speed: {weatherInfo.wind.speed}km/h</p>
                        <p>{weatherInfo.weather[0].main} - {weatherInfo.weather[0].description}</p>
                        <Image
                            src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                        />
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="btn btn-secondary"
                            onClick={onClickClose}
                            title="Close"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};