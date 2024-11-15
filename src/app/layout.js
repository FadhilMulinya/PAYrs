import "bootstrap/dist/css/bootstrap.min.css";
import  'react-csv-importer/dist/index.css';
import "./styles.css";


export const metadata = {
  title: "Batchsend",
  description: "Batch send multiple payments at the same time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900&display=swap" rel="stylesheet" />
      </head>
      <body >{children}</body>
    </html>
  );
}
