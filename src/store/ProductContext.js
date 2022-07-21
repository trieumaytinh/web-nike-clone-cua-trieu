import { createContext, useReducer, useState } from "react";
import { data } from "../data";
export const ProductContext = createContext();
const productInitState = {
  items: [],
  number: 0,
  price: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDNUMBER") {
    return { items: state.items, number: state.number + 1, price: state.price };
  }

  if (action.type === "ADDPRODUCT") {
    const { name, price, mainColor, number } = action.data;
    const updatedPrice = state.price + price;
    console.log(price);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.name === name && item.mainColor === mainColor
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedNumber = existingCartItem.number + 1;
      const updated1ProductPrice = existingCartItem.price + price;
      const updatedItem = {
        ...existingCartItem,
        price: updated1ProductPrice,
        number: updatedNumber,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.data);
    }
    console.log(updatedItems);
    console.log(updatedPrice);
    return { items: updatedItems, number: state.number, price: updatedPrice };
  }
  if (action.type === "ADJUSTCHECKOUT") {
    console.log(action.data);
    const updatedNumber = +action.data[0];
    const itemIndexInBag = action.data[1];
    const updated1ProductPrice = +action.data[2];
    const updatedTotalNumber = +action.data[3];
    const gapPrice = action.data[4];
    const adjustProduct = state.items[itemIndexInBag];
    const updatedItem = {
      ...adjustProduct,
      number: updatedNumber,
      price: updated1ProductPrice,
    };
    let updatedItems = [...state.items];
    updatedItems[itemIndexInBag] = updatedItem;
    return {
      items: updatedItems,
      number: state.number + updatedTotalNumber,
      price: state.price + gapPrice,
    };
  }
  if (action.type === "REMOVEBUTTON") {
    console.log(action.data);
    const itemIndexInBag = action.data[0];
    const removedNumber = action.data[1];
    const removedPrice = action.data[2];
    let updatedItems = [...state.items];
    updatedItems[itemIndexInBag] = null;
    console.log(updatedItems);
    return {
      items: updatedItems,
      number: state.number - removedNumber,
      price: state.price - removedPrice,
    };
  }
};

function ProductContextProvider(props) {
  const [productState, dispatchProduct] = useReducer(
    cartReducer,
    productInitState
  );
  const [index, setIndex] = useState(0); //! Dùng để đổi qua lại giữa hai data do hình ảnh load k kịp
  const [genderSorting, setGenderSorting] = useState([]);
  const [typeSorting, setTypeSorting] = useState([]);
  const [colorSorting, setColorSorting] = useState([]);
  const [priceSorting, setPriceSorting] = useState("none");
  const [womenCheck, setWomenCheck] = useState(false);
  const [menCheck, setMenCheck] = useState(false);
  const [budget, setBudget] = useState(0);
  const [customGender, setCustomGender] = useState("");
  const [budgetShow,setBudgetShow] = useState(true);
  const updatedTypeProduct = data
    .map((item, itemIndex) => {
      if (
        Object.values(item)[2] === typeSorting[0] ||
        Object.values(item)[2] === typeSorting[1] ||
        Object.values(item)[2] === typeSorting[2] ||
        Object.values(item)[2] === typeSorting[3] ||
        Object.values(item)[2] === typeSorting[4] ||
        Object.values(item)[2] === typeSorting[5]
      ) {
        return itemIndex;
      }
    })
    .filter((item) => item !== undefined);
  const updatedGenderProduct = data
    .map((item, itemIndex) => {
      if (
        Object.values(item)[1] === genderSorting[0] ||
        Object.values(item)[1] === genderSorting[1] ||
        Object.values(item)[1] === genderSorting[2]
      ) {
        return itemIndex;
      }
    })
    .filter((item) => item !== undefined);
  const updatedColorProduct = data
    .map((item, itemIndex) => {
      if (
        Object.values(item)[4] === colorSorting[0] ||
        Object.values(item)[4] === colorSorting[1] ||
        Object.values(item)[4] === colorSorting[2] ||
        Object.values(item)[4] === colorSorting[3] ||
        Object.values(item)[4] === colorSorting[4] ||
        Object.values(item)[4] === colorSorting[5] ||
        Object.values(item)[4] === colorSorting[6] ||
        Object.values(item)[4] === colorSorting[7] ||
        Object.values(item)[4] === colorSorting[8] ||
        Object.values(item)[4] === colorSorting[9] ||
        Object.values(item)[4] === colorSorting[10] ||
        Object.values(item)[4] === colorSorting[11]
      ) {
        return itemIndex;
      }
    })
    .filter((item) => item !== undefined);

  const hiddenOtherColor = data
    .map((item, itemIndex) => {
      const { subs } = item;
      const subsColor = subs.map((item, index) => {
        return Object.values(item)[0];
      });

      let a = [];
      for (let i = 0; i < colorSorting.length; i++) {
        if (
          (subsColor.length > 0 && subsColor[0] === colorSorting[i]) ||
          subsColor[1] === colorSorting[i] ||
          subsColor[2] === colorSorting[i]
        ) {
          a.push(itemIndex, colorSorting[i]);
          return a;
        }
      }
    })
    .filter((item) => item !== undefined);

  const indexOfHiddenOtherColor = hiddenOtherColor.map((item) => {
    return item[0];
  });

  let indexOfQualifiedHiddenOther;
  if (genderSorting.length > 0 || typeSorting.length > 0) {
    indexOfQualifiedHiddenOther = indexOfHiddenOtherColor.filter((item) => {
      for (let i = 0; i < typeSorting.length; i++) {
        return Object.values(data[item])[2] === typeSorting[i];
      }
      for (let i = 0; i < genderSorting.length; i++) {
        return Object.values(data[item])[1] === genderSorting[i];
      }
    });
  } else {
    indexOfQualifiedHiddenOther = indexOfHiddenOtherColor;
  }
  const qualifiedHiddenOther = indexOfQualifiedHiddenOther.map((item) => {
    for (let i = 0; i < hiddenOtherColor.length; i++) {
      if (item === hiddenOtherColor[i][0]) {
        return hiddenOtherColor[i];
      }
    }
  });

  //! Sẽ có 2 trường hợp
  //! TH1 : firstSort bị rỗng giả do phương trình filter (nếu mà không tìm ra giá trị giống nhau
  //! thì nó sẽ trả về array rỗng ) do vậy khi chỉ chọn 1 cái giữa Color hoặc Gender thì auto
  //! firstSort sẽ rỗng
  //! TH2: firstSort bị rỗng thật do Color và Gender không match
  let first = [...updatedColorProduct, ...updatedGenderProduct];
  let firstSort = first.filter((number, index) => {
    return first.indexOf(number) !== index;
  });
  //! Dưới đây là if khi gặp rỗng giả sẽ tự chuyển firstSort thành giá trị của 1 cái case đc chọn
  if (updatedColorProduct.length === 0 || updatedGenderProduct.length === 0) {
    firstSort = first;
  }
  let second = [...firstSort, ...updatedTypeProduct];
  let secondSort = second.filter((number, index) => {
    return second.indexOf(number) !== index;
  });
  //! Dưới đây tiếp tục check rỗng giả do có thể chúng ta không chọn Color hay Gender trong lần đầu
  //! làm cho firstSort bị rỗng => lúc này chỉ lấy giá trị của 1 case được chọn là Type chứ
  //! không để filter làm rỗng giả
  if (updatedColorProduct.length === 0 || updatedGenderProduct.length === 0) {
    if (firstSort.length === 0 || updatedTypeProduct.length === 0) {
      secondSort = second;
    }
  } else {
    if (updatedTypeProduct.length === 0) {
      secondSort = second;
    }
  }

  const productContextValue = {
    budgetShow,
    setBudgetShow,
    budget,
    qualifiedHiddenOther,
    indexOfQualifiedHiddenOther,
    secondSort,
    index,
    productState,
    colorSorting,
    typeSorting,
    genderSorting,
    priceSorting,
    hiddenOtherColor,
    menCheck,
    womenCheck,
    customGender,
    setMenCheck,
    setWomenCheck,
    setIndex,
    setTypeSorting,
    setGenderSorting,
    setColorSorting,
    setPriceSorting,
    dispatchProduct,
    setBudget,
    setCustomGender,
  };
  return (
    <ProductContext.Provider value={productContextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
