type MenuOptions = "" | "all" | "cat" | "dog" | "fish";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObj = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== "") {
    returnObj[activeMenu] = true;
  }

  return returnObj;
};
