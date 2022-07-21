import manModel from "../../3dmodelcutted.png";
import womanModel from "../../womencutted.png";
import { data } from "../../data";
import "./DesignContent.css";
import { useContext, useState } from "react";
import { ProductContext } from "../../store/ProductContext";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
function DesignContent() {
  const { customGender, budget, dispatchProduct } = useContext(ProductContext);
  const topPriceLowerThanBudget = data.map((item, itemIndex) => {
    if (
      Object.values(item)[12] === "Top" &&
      Object.values(item)[3] <= budget * 0.175 &&
      Object.values(item)[1] === customGender
    ) {
      return Object.values(item)[3];
    } else {
      return 0;
    }
  });
  const highestTopIndex = topPriceLowerThanBudget.findIndex(
    (item) => item === Math.max(...topPriceLowerThanBudget)
  );
  const indexOfTopPricesLowerThanBudget = topPriceLowerThanBudget
    .map((item, itemIndex) => {
      if (item !== 0) {
        return itemIndex;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);
  const randomTopValue = Math.floor(
    Math.random() * indexOfTopPricesLowerThanBudget.length
  );
  const randomTopIndex = indexOfTopPricesLowerThanBudget.find(
    (item, itemIndex) => itemIndex === randomTopValue
  );

  const bottomPriceLowerThanBudget = data.map((item, itemIndex) => {
    if (
      Object.values(item)[12] === "Bottom" &&
      Object.values(item)[3] <= budget * 0.4 &&
      Object.values(item)[1] === customGender
    ) {
      return Object.values(item)[3];
    } else {
      return 0;
    }
  });
  const highestBottomIndex = bottomPriceLowerThanBudget.findIndex(
    (item) => item === Math.max(...bottomPriceLowerThanBudget)
  );
  const indexOfBottomPricesLowerThanBudget = bottomPriceLowerThanBudget
    .map((item, itemIndex) => {
      if (item !== 0) {
        return itemIndex;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);
  const randomBottomValue = Math.floor(
    Math.random() * indexOfBottomPricesLowerThanBudget.length
  );
  const randomBottomIndex = indexOfBottomPricesLowerThanBudget.find(
    (item, itemIndex) => itemIndex === randomBottomValue
  );

  const middlePriceLowerThanBudget = data.map((item, itemIndex) => {
    if (
      Object.values(item)[12] === "Middle" &&
      Object.values(item)[3] <= budget * 0.175 &&
      Object.values(item)[1] === customGender
    ) {
      return Object.values(item)[3];
    } else {
      return 0;
    }
  });
  const highestMiddleIndex = middlePriceLowerThanBudget.findIndex(
    (item) => item === Math.max(...middlePriceLowerThanBudget)
  );
  const indexOfMiddlePricesLowerThanBudget = middlePriceLowerThanBudget
    .map((item, itemIndex) => {
      if (item !== 0) {
        return itemIndex;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);
  const randomMiddleValue = Math.floor(
    Math.random() * indexOfMiddlePricesLowerThanBudget.length
  );
  const randomMiddleIndex = indexOfMiddlePricesLowerThanBudget.find(
    (item, itemIndex) => itemIndex === randomMiddleValue
  );

  const outerPriceLowerThanBudget = data.map((item, itemIndex) => {
    if (
      Object.values(item)[12] === "Outer" &&
      Object.values(item)[3] <= budget * 0.25 &&
      Object.values(item)[1] === customGender
    ) {
      return Object.values(item)[3];
    } else {
      return 0;
    }
  });
  const highestOuterIndex = outerPriceLowerThanBudget.findIndex(
    (item) => item === Math.max(...outerPriceLowerThanBudget)
  );
  const indexOfOuterPricesLowerThanBudget = outerPriceLowerThanBudget
    .map((item, itemIndex) => {
      if (item !== 0) {
        return itemIndex;
      } else {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);
  const randomOuterValue = Math.floor(
    Math.random() * indexOfOuterPricesLowerThanBudget.length
  );
  const randomOuterIndex = indexOfOuterPricesLowerThanBudget.find(
    (item, itemIndex) => itemIndex === randomOuterValue
  );
  console.log(randomTopIndex);
  const [randomTop, setRandomTop] = useState(-1);
  const [randomBottom, setRandomBottom] = useState(-1);
  const [randomMiddle, setRandomMiddle] = useState(-1);
  const [randomOuter, setRandomOuter] = useState(-1);
  const {
    i592: hightopimg,
    name: hightopname,
    price: hightopprice,
    type: hightoptype,
    gender: hightopgender,
  } = data[highestTopIndex];
  const {
    i592: highbottomimg,
    name: highbottomname,
    price: highbottomprice,
    type: highbottomtype,
    gender: highbottomgender,
  } = data[highestBottomIndex];
  const {
    i592: highmiddleimg,
    name: highmiddlename,
    price: highmiddleprice,
    type: highmiddletype,
    gender: highmiddlegender,
  } = data[highestMiddleIndex];
  const {
    i592: highouterimg,
    name: highoutername,
    price: highouterprice,
    type: highoutertype,
    gender: highoutergender,
  } = data[highestOuterIndex];
  const {
    i592: randommiddleimg,
    name: randommiddlename,
    price: randommiddleprice,
    type: randommiddletype,
    gender: randommiddlegender,
  } = data[indexOfMiddlePricesLowerThanBudget[randomMiddle]] !== undefined &&
  data[indexOfMiddlePricesLowerThanBudget[randomMiddle]];
  const {
    i592: randombottomimg,
    name: randombottomname,
    price: randombottomprice,
    type: randombottomtype,
    gender: randombottomgender,
  } = data[indexOfBottomPricesLowerThanBudget[randomBottom]] !== undefined &&
  data[indexOfBottomPricesLowerThanBudget[randomBottom]];
  const {
    i592: randomtopimg,
    name: randomtopname,
    price: randomtopprice,
    type: randomtoptype,
    gender: randomtopgender,
  } = data[indexOfTopPricesLowerThanBudget[randomTop]] !== undefined &&
  data[indexOfTopPricesLowerThanBudget[randomTop]];
  const {
    i592: randomouterimg,
    name: randomoutername,
    price: randomouterprice,
    type: randomoutertype,
    gender: randomoutergender,
  } = data[indexOfOuterPricesLowerThanBudget[randomOuter]] !== undefined &&
  data[indexOfOuterPricesLowerThanBudget[randomOuter]];
  console.log(indexOfBottomPricesLowerThanBudget);
  return (
    <div id="DC" className="DC">
      <div className="DC-ModelContainer">
        <img
          className="DC-Model"
          src={customGender === "Men" ? manModel : womanModel}
        />
      </div>
      <div className="DC-TopProductContainer">
        <div className="DC-TopImgContainer">
          <img src={randomTop === -1 ? hightopimg : randomtopimg} />
        </div>
        <div className="DC-TopInfoContainer">
          <p className="DC-TopName">
            {randomTop === -1 ? hightopname : randomtopname}
          </p>
          <p className="DC-TopType">{`${customGender}'s ${
            randomTop === -1 ? hightoptype : randomtoptype
          }`}</p>
          <p className="DC-TopPrice">{`$${
            randomTop === -1 ? hightopprice : randomtopprice
          }`}</p>
          <GiPerspectiveDiceSixFacesRandom
            className="DC-RandomIcon"
            onClick={() => {
              setRandomTop((prev) => {
                if (indexOfTopPricesLowerThanBudget.length > 1) {
                  if (
                    prev === -1 &&
                    indexOfTopPricesLowerThanBudget[0] === highestTopIndex
                  ) {
                    return prev + 2;
                  }
                  if (prev === indexOfTopPricesLowerThanBudget.length - 1) {
                    return 0;
                  }
                  if (prev < indexOfTopPricesLowerThanBudget.length - 1) {
                    return prev + 1;
                  }
                } else {
                  return 0;
                }
              });
            }}
          />
        </div>
      </div>
      <div className="DC-MiddleProductContainer">
        <div className="DC-MiddleImgContainer">
          <img src={randomMiddle === -1 ? highmiddleimg : randommiddleimg} />
        </div>
        <div className="DC-MiddleInfoContainer">
          <p className="DC-MiddleName">
            {randomMiddle === -1 ? highmiddlename : randommiddlename}
          </p>
          <p className="DC-MiddleType">{`${customGender}'s ${
            randomMiddle === -1 ? highmiddletype : randommiddletype
          }`}</p>
          <p className="DC-MiddlePrice">{`$${
            randomMiddle === -1 ? highmiddleprice : randommiddleprice
          }`}</p>
          <GiPerspectiveDiceSixFacesRandom
            className="DC-RandomIcon"
            onClick={() => {
              setRandomMiddle((prev) => {
                if (indexOfMiddlePricesLowerThanBudget.length > 1) {
                  if (
                    prev === -1 &&
                    indexOfMiddlePricesLowerThanBudget[0] === highestMiddleIndex
                  ) {
                    return prev + 2;
                  }
                  if (prev === indexOfMiddlePricesLowerThanBudget.length - 1) {
                    return 0;
                  }
                  if (prev < indexOfMiddlePricesLowerThanBudget.length - 1) {
                    return prev + 1;
                  }
                } else {
                  return 0;
                }
              });
            }}
          />
        </div>
      </div>
      <div className="DC-BottomProductContainer">
        <div className="DC-BottomImgContainer">
          <img src={randomBottom === -1 ? highbottomimg : randombottomimg} />
        </div>
        <div className="DC-BottomInfoContainer">
          <p className="DC-BottomName">
            {randomBottom === -1 ? highbottomname : randombottomname}
          </p>
          <p className="DC-BottomType">{`${customGender}'s ${
            randomBottom === -1 ? highbottomtype : randombottomtype
          }`}</p>
          <p className="DC-BottomPrice">{`$${
            randomBottom === -1 ? highbottomprice : randombottomprice
          }`}</p>
          <GiPerspectiveDiceSixFacesRandom
            className="DC-RandomIcon"
            onClick={() => {
              setRandomBottom((prev) => {
                if (indexOfBottomPricesLowerThanBudget.length > 1) {
                  if (
                    prev === -1 &&
                    indexOfBottomPricesLowerThanBudget[0] === highestBottomIndex
                  ) {
                    return prev + 2;
                  }
                  if (prev === indexOfBottomPricesLowerThanBudget.length - 1) {
                    return 0;
                  }
                  if (prev < indexOfBottomPricesLowerThanBudget.length - 1) {
                    return prev + 1;
                  }
                } else {
                  return 0;
                }
              });
            }}
          />
        </div>
      </div>
      <div className="DC-OuterProductContainer">
        <div className="DC-OuterImgContainer">
          <img src={randomOuter === -1 ? highouterimg : randomouterimg} />
        </div>
        <div className="DC-OuterInfoContainer">
          <p className="DC-OuterName">
            {randomOuter === -1 ? highoutername : randomoutername}
          </p>
          <p className="DC-OuterType">{`${customGender}'s ${
            randomOuter === -1 ? highoutertype : randomoutertype
          }`}</p>
          <p className="DC-OuterPrice">{`$${
            randomOuter === -1 ? highouterprice : randomouterprice
          }`}</p>
          <GiPerspectiveDiceSixFacesRandom
            className="DC-RandomIcon"
            onClick={() => {
              setRandomOuter((prev) => {
                if (indexOfOuterPricesLowerThanBudget.length > 1) {
                  if (
                    prev === -1 &&
                    indexOfOuterPricesLowerThanBudget[0] === highestOuterIndex
                  ) {
                    return prev + 2;
                  }
                  if (prev === indexOfOuterPricesLowerThanBudget.length - 1) {
                    return 0;
                  }
                  if (prev < indexOfOuterPricesLowerThanBudget.length - 1) {
                    return prev + 1;
                  }
                } else {
                  return 0;
                }
              });
            }}
          />
        </div>
      </div>
      <button
        className="DC-Btn"
        onClick={() => {
          dispatchProduct({ type: "ADDNUMBER" });
          dispatchProduct({ type: "ADDNUMBER" });
          dispatchProduct({ type: "ADDNUMBER" });
          dispatchProduct({ type: "ADDNUMBER" });
          if (randomTop === -1) {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                name: hightopname,
                gender: hightopgender,
                price: hightopprice,
                type: hightoptype,
                i592: hightopimg,
                number: 1,
              },
            });
          } else {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: randomtopimg,
                name: randomtopname,
                price: randomtopprice,
                type: randomtoptype,
                gender: randomtopgender,
                number: 1,
              },
            });
          }
          if (randomBottom === -1) {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: highbottomimg,
                name: highbottomname,
                price: highbottomprice,
                type: highbottomtype,
                gender: highbottomgender,
                number: 1,
              },
            });
          } else {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: randombottomimg,
                name: randombottomname,
                price: randombottomprice,
                type: randombottomtype,
                gender: randombottomgender,
                number: 1,
              },
            });
          }
          if (randomMiddle === -1) {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: highmiddleimg,
                name: highmiddlename,
                price: highmiddleprice,
                type: highmiddletype,
                gender: highmiddlegender,
                number: 1,
              },
            });
          } else {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: randommiddleimg,
                name: randommiddlename,
                price: randommiddleprice,
                type: randommiddletype,
                gender: randommiddlegender,
                number: 1,
              },
            });
          }
          if (randomOuter === -1) {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: highouterimg,
                name: highoutername,
                price: highouterprice,
                type: highoutertype,
                gender: highoutergender,
                number: 1,
              },
            });
          } else {
            dispatchProduct({
              type: "ADDPRODUCT",
              data: {
                i592: randomouterimg,
                name: randomoutername,
                price: randomouterprice,
                type: randomoutertype,
                gender: randomoutergender,
                number: 1,
              },
            });
          }
        }}
      >
        Add Outfit to Bag
      </button>
    </div>
  );
}

export default DesignContent;
