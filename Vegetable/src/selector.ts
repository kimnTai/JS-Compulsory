import render from "./render";

/**根據 select 做排序*/
function addSelectEvent(data: vegetableData[]): void {
  const selectButton = document.querySelector(
    "#js-select"
  ) as HTMLSelectElement;
  const selectMobileButton = document.querySelector(
    "#js-mobile-select"
  ) as HTMLSelectElement;
  selectButton.addEventListener("change", (event) => {
    const target = event.target as HTMLOptionElement;
    switch (target.value) {
      case "依上價排序":
        selectChange(data, "上價");
        break;
      case "依中價排序":
        selectChange(data, "中價");
        break;
      case "依下價排序":
        selectChange(data, "下價");
        break;
      case "依平均價排序":
        selectChange(data, "平均價");
        break;
      case "依交易量排序":
        selectChange(data, "交易量");
        break;
    }
    render(data);
  });
  selectMobileButton.addEventListener("change", (event) => {
    const target = event.target as HTMLOptionElement;
    selectChange(data, target.value);
    render(data);
  });
}

/**上下按鈕切換 */
function addSortEvent(data: vegetableData[]): void {
  const sortAdvanced = document.querySelector(
    ".js-sort-advanced"
  ) as HTMLElement;
  sortAdvanced.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const sortPrice = target.dataset.price as string;
    switch (target.dataset.sort) {
      case "up":
        selectChange(data, sortPrice, "up");
        break;
      case "down":
        selectChange(data, sortPrice, "down");
        break;
    }
    render(data);
  });
}

/**排序 */
function selectChange(data: any[], name: string, sign?: string): void {
  let signNumber = 1;
  if (sign == "down") {
    signNumber = -1;
  }
  data.sort((a, b) => {
    return (b[name] - a[name]) * signNumber;
  });
}

export { addSelectEvent, addSortEvent, selectChange };
