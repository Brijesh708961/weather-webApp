import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const INFO_URL =
    "https://images.unsplash.com/photo-1633885274964-d5a5d914bcb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXIlMjBoYXplfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";

  let COLD_URL =
    "https://images.unsplash.com/photo-1579847641267-5445b760b991?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
  let HOT_URL =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
  let RAINY_URL =
    "https://images.unsplash.com/photo-1509635022432-0220ac12960b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";

  return (
    <div className="info-box">
      <h1>Weather Info - {info.weather}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 90
                ? RAINY_URL
                : info.temp < 15
                ? COLD_URL
                : HOT_URL
            }
            title="Weather Image"
          />
          <CardContent>
            {/* City Name */}
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 90 ? (
                <ThunderstormIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <SunnyIcon />
              )}
            </Typography>

            {/* Weather Details */}
            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Min Temperature: {info.tempMin}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Temperature: {info.tempMax}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {info.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}°C.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
