var arr=[1,2,3,4];

let plus5 = arr.map((val, i, arr) => {
    return val + 5;
  });
  console.log(plus5);

  let newArr = arr.map((val, i, arr) => {
    return {
      value: val,
      index: i
    };
  });
  console.log(newArr);