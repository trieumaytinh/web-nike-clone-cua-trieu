import { useContext, useEffect, useState } from "react";
import { UiContext } from "../../../store/UIContext";
import OneProductInMenu from "../OneProductInMenu/OneProductInMenu";
import "./ShoppingMenu.css";
import { data } from "../../../data";
import { ProductContext } from "../../../store/ProductContext";
import { useHistory } from "react-router-dom";

function ShoppingMenu() {
  let shownProduct1 = [];
  let shownProduct2 = [];
  const uiCtx = useContext(UiContext);
  const ctx = useContext(ProductContext);
  const { smClass } = uiCtx;
  const {
    index,
    secondSort,
    priceSorting,
    genderSorting,
    typeSorting,
    colorSorting,
    indexOfQualifiedHiddenOther,
    qualifiedHiddenOther,
  } = ctx;

  //! Thử làm với second sort
  let dataIndex = [];
  let finalIndex;
  let thirdSort = [];
  for (let i = 0; i < data.length; i++) {
    thirdSort[i] = null;
    dataIndex[i] = i;
  }
  for (let j = 0; j < secondSort.length; j++) {
    const index = secondSort[j];
    thirdSort[index] = index;
  }
  secondSort.push(...indexOfQualifiedHiddenOther);
  if (secondSort.length === 0) {
    finalIndex = dataIndex;
  } else {
    finalIndex = thirdSort.concat(
      indexOfQualifiedHiddenOther.map((item) => {
        thirdSort[item] = item;
        return thirdSort;
      })
    );
  }

  if (priceSorting === "none") {
    shownProduct1 = finalIndex.map((index) => data[index]);
    shownProduct2 = finalIndex.map((index) => data[index]);
  } else {
    if (priceSorting === "highlow") {
      shownProduct1 = finalIndex
        .map((index) => data[index])
        .sort(function (a, b) {
          return Object.values(b)[3] - Object.values(a)[3];
        });
      shownProduct2 = finalIndex
        .map((index) => data[index])
        .sort(function (a, b) {
          return Object.values(b)[3] - Object.values(a)[3];
        });
    }
    if (priceSorting === "lowhigh") {
      shownProduct1 = finalIndex
        .map((index) => data[index])
        .sort(function (a, b) {
          return Object.values(a)[3] - Object.values(b)[3];
        });
      shownProduct2 = finalIndex
        .map((index) => data[index])
        .sort(function (a, b) {
          return Object.values(a)[3] - Object.values(b)[3];
        });
    }
  }

  if (
    (genderSorting.length > 0 && secondSort.length === 0) ||
    (typeSorting.length > 0 && secondSort.length === 0)
  ) {
    shownProduct1 = false;
    shownProduct2 = false;
  }

  return (
    <div className={smClass}>
      {!shownProduct1 && <p>There are no items match your search.</p>}
      {shownProduct1 &&
        index % 2 === 0 &&
        shownProduct1.map((product, productIndexInData) => {
          if (product !== undefined) {
            const { subs } = product;
            const id = Object.values(product)[5];
            const hiddenId = indexOfQualifiedHiddenOther.filter(
              (item) => item === id
            );
            if (hiddenId.length > 0) {
              const color = qualifiedHiddenOther.filter(
                (item) => item[0] === id
              );
              const hiddenColorPassed = subs.filter(
                (item) => Object.values(item)[0] === color[0][1]
              );
              const hiddenSubIndex = subs.findIndex((item) => {
                return Object.values(item)[0] === color[0][1];
              });
              return (
                <OneProductInMenu
                  hiddenSubIndex={hiddenSubIndex + 1}
                  hiddenImg={hiddenColorPassed}
                  productIndexInData={id}
                  {...product}
                />
              );
            }

            return (
              <OneProductInMenu
                hiddenId={hiddenId}
                productIndexInData={id}
                {...product}
              />
            );
          }
        })}
      {shownProduct2 &&
        index % 2 === 1 &&
        shownProduct2.map((product, productIndexInData) => {
          if (product !== undefined) {
            const { subs } = product;
            const id = Object.values(product)[5];
            const hiddenId = indexOfQualifiedHiddenOther.filter(
              (item) => item === id
            );
            if (hiddenId.length > 0) {
              const color = qualifiedHiddenOther.filter(
                (item) => item[0] === id
              );

              const hiddenColorPassed = subs.filter(
                (item) => Object.values(item)[0] === color[0][1]
              );
              const { i592 } = hiddenColorPassed;
              const hiddenSubIndex = subs.findIndex((item) => {
                return Object.values(item)[0] === color[0][1];
              });
              return (
                <OneProductInMenu
                  hiddenSubIndex={hiddenSubIndex + 1}
                  hiddenImg={hiddenColorPassed}
                  productIndexInData={id}
                  {...product}
                />
              );
            }

            return (
              <OneProductInMenu
                hiddenId={hiddenId}
                productIndexInData={id}
                {...product}
              />
            );
          }
        })}
    </div>
  );
}
export default ShoppingMenu;
