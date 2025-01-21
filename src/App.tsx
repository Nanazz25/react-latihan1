import { useState } from "react";
import Message from "./Message";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";


function App() {
  const items = [
    "Indonesia",
    "Arab",
    "Singapore",
    "Thailand",
    "Vietnam",
    "Rusia",
    "Japanese",
  ];
  const itemss = [
    "Cianjur",
    "Bandung",
    "Jakarta",
    "Sukabumi",
    "Tangerang",
    "Ciamis",
    "Tasikmalaya",
  ];

  const [alertVisible, setAlertVisible] = useState(false);
  const handleClick = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  // State untuk menyimpan pilihan negara dan kota
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Handler untuk memilih negara
  const handleSelectCountry = (item: string) => {
    setSelectedCountry(item);  // Set negara yang dipilih
  };

  // Handler untuk memilih kota
  const handleSelectCity = (item: string) => {
    setSelectedCity(item);  // Set kota yang dipilih
  };

  return (
    <div>
      {/* Static Alert Example */}
      <Alert onClose={() => {}}>
        You <span>Lose!</span>
      </Alert>

      {/* Button Komponen */}
      <Button color="danger" onClick={handleClick}>
        Klik Me
      </Button>

      {/* Alert Komponen */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Rawrr</Alert>
      )}

      {/* Flex Container untuk Negara dan Kota */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "start" }}>
        {/* Kolom Negara */}
        <div style={{ textAlign: "center" }}>
          <h2>Negara</h2>
          <ListGroup
            items={items}
            heading=""
            onSelectItem={handleSelectCountry}
          />
          {/* Tampilkan negara yang dipilih */}
          {selectedCountry && (
            <p>Kamu memilih <span style={{fontWeight: "bold"}}>{selectedCountry}</span></p>
          )}
        </div>

        {/* Kolom Kota */}
        <div style={{ textAlign: "center" }}>
          <h2>Kota</h2>
          <ListGroup
            items={itemss}
            heading=""
            onSelectItem={handleSelectCity}
          />
          {/* Tampilkan kota yang dipilih */}
          {selectedCity && (
            <p>Kamu memilih <span style={{fontWeight: "bold"}}>{selectedCity}</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
