import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import {FiArrowRight} from 'react-icons/fi'
function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSearch = (e) => {
   searchTerm(e.target.value)
  };
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* header section */}
      <header>
        <nav class="bg-black border-gray-200 px-4 lg:px-6  py-6">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
              <span class="self-center text-white text-xl font-semibold whitespace-nowrap">
                Abstrack | Help Center
              </span>
            </a>
            <div>
              <button
                type="button"
                class="inline-flex items-center py-2 px-6 ml-1 text-lg text-white border border-white rounded-lg bg-gray-500  hover:bg-gray-800  "
              >
                <span>Submit a request</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* search section */}
      <div className="h-[400px] flex flex-col py-8 bg-[#DADBF0]">
        <div className="text-center">
          <h1 className="text-9xl text-black text-center font-semibold">
            How we can help?
          </h1>
        </div>
        <div className="flex w-[30%] mx-auto my-8 bg-white rounded-xl shadow-lg p-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className=" text-black px-4 py-2 rounded-xl flex items-center justify-center "
          >
            <FiArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* card section     */}
      <div className="grid grid-cols-1 w-[70%] md:grid-cols-2 gap-16 my-10  p-6 mx-auto ">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {/* Footer section */}
      <Footer />
    </>
  );
}

export default App;
