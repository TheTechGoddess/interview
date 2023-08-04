import { useState } from "react";

function App() {
  const lists = [
    {
      name: "Second Author",
      duration: 2000046,
    },
    {
      name: "Auto",
      duration: 3200046,
    },
    {
      name: "Ball",
      duration: 4500046,
    },
    {
      name: "About to pump",
      duration: 1000046,
    },
    {
      name: "Catcalling",
      duration: 7000046,
    },
    {
      name: "DOM",
      duration: 1000046,
    },
    {
      name: "Early rise",
      duration: 900046,
    },
    {
      name: "Firm rise",
      duration: 300046,
    },
    {
      name: "First Author",
      duration: 2500046,
    },
    {
      name: "First Author",
      duration: 2200046,
    },
    {
      name: "To the moon",
      duration: 1000046,
    },
  ];
  const [category, setCategory] = useState(null);
  const [direction, setDirection] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDirectionOpen, setIsDirectionOpen] = useState(false);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsCategoryOpen(false);
  };

  const handleDirectionSelect = (selectedDirection) => {
    setDirection(selectedDirection);
    setIsDirectionOpen(false);
  };

  return (
    <div className="flex flex-col w-full p-6">
      <div className="flex w-full flex-col">
        <h1 className="self-center text-[#1B3D64] text-2xl font-bold">
          Audio Track Sorting
        </h1>
        <div className="flex justify-end">
          <div className="self-end my-2 relative">
            <button
              className="py-1 bg-[#E9E9EC] mx-3 rounded w-[150px]"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              {category ? ` ${category}` : "Select Category"} &#9662;
            </button>
            {isCategoryOpen && (
              <div className="absolute flex flex-col justify-center shadow-2xl my-3 border rounded w-[150px] mx-4 x-30">
                <button
                  onClick={() => handleCategorySelect("name")}
                  className="my-1 py-1 hover:bg-gray-300 mx-2 rounded"
                >
                  Name
                </button>
                <button
                  onClick={() => handleCategorySelect("duration")}
                  className="my-1 py-1 hover:bg-gray-300 mx-2 rounded"
                >
                  Duration
                </button>
              </div>
            )}
          </div>
          <div className="self-end my-2 relative">
            <button
              className="py-1 bg-[#E9E9EC] mx-3 rounded w-[150px]"
              onClick={() => setIsDirectionOpen(!isDirectionOpen)}
            >
              {direction ? ` ${direction}` : "Select Direction"} &#9662;
            </button>
            {isDirectionOpen && (
              <div className="absolute flex flex-col justify-center shadow-2xl my-3 border rounded w-[150px] mx-4 x-30">
                <button
                  onClick={() => handleDirectionSelect("ascending")}
                  className="my-1 py-1 hover:bg-gray-300 mx-2 rounded"
                >
                  Ascending
                </button>
                <button
                  onClick={() => handleDirectionSelect("descending")}
                  className="my-1 py-1 hover:bg-gray-300 mx-2 rounded"
                >
                  Descending
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {lists
        .sort((a, b) =>
          direction === "ascending"
            ? 0
            : direction === "descending"
            ? lists.indexOf(b) - lists.indexOf(a)
            : 0
        )
        .map((list, index) => (
          <div key={index}>
            {category === "name" && (
              <p className="text-[#727272] text-base font-medium">
                {list.name}
              </p>
            )}
            {category === "duration" && (
              <p className="text-[#B3BAC6] text-sm font-base">
                {list.duration}
              </p>
            )}
            {category !== "name" && category !== "duration" && (
              <div>
                <p className="text-[#727272] text-base font-medium">
                  {list.name}
                </p>
                <p className="text-[#B3BAC6] text-sm font-base">
                  {list.duration}
                </p>
              </div>
            )}
            <hr className="mb-4" />
          </div>
        ))}
    </div>
  );
}

export default App;
