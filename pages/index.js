import React, { useEffect, useState } from "react";
import Experience from "../components/Experience";
import { data } from "../data";

const index = () => {
  const [allData, setAllData] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setAllData(data);
  }, []);

  const handleCardClick = (i, index) => {
    const updatedData = [...allData];

    updatedData[i].imagesData.forEach((imageData, index2) => {
      imageData.active = index2 === index;
    });
    setAllData(updatedData);
  };

  useEffect(() => {
    const totalPrice = allData.reduce((accumulator, currentData) => {
      const activeImage = currentData.imagesData.find(
        (imageData) => imageData.active
      );
      if (activeImage.price) {
        return accumulator + parseInt(activeImage.price);
      }
      return accumulator;
    }, 0);

    // console.log(totalPrice);
    setTotalPrice(totalPrice);
  }, [allData]);
  return (
    <div className="flex md:flex-row flex-col md:h-[100vh] ">
      <div className="md:w-[50vw] w-[100vw] md:h-[100vh] h-[50vh] ">
        <Experience allData={allData} />
      </div>

      {/* html */}
      <div className="overflow-scroll md:w-[50vw] w-[100vw]  p-20">
        <div>
          <h1 className="text-3xl">Configure Backyard</h1>
          <p className=" mt-2 text-xl text-gray-500">
            Make it yours. Choose your layout and finishes. Customize your
            windows, doors, and decks.
          </p>
          <p className="mt-2 text-gray-400">
            Backyard is currently available in India.
          </p>
        </div>

        <div className="mt-20">
          {allData.map((data, i) => {
            return (
              <div className="" key={i}>
                <h1 className="mb-4 mt-16">{data.title}</h1>
                <div
                  className={`grid ${
                    data.imagesData.length >= 3 ? "grid-cols-3" : "grid-cols-2"
                  }`}
                >
                  {data.imagesData.map((imageData, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          imageData.active && "border-2"
                        } mr-2 rounded-2xl mb-2 cursor-pointer`}
                        onClick={() => handleCardClick(i, index)}
                      >
                        <div className="bg-[#ecebe6] rounded-lg m-2">
                          <img src={imageData.img} alt={imageData.name} />
                        </div>
                        <div className="m-2">
                          <h1>{imageData?.name}</h1>
                          <p>{imageData?.sqft}</p>
                          {imageData?.price && (
                            <p className="border-2 text-[10px] inline-block rounded-lg text-gray-500 p-[1px]">
                              {" "}
                              {imageData.additional && "+"}{" "}
                              {`$ ${imageData?.price}`}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* total section */}

        <div>
          Total Price: <p>$ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
