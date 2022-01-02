import render from "./render";

/**過濾種類 */
function addFilterEvent(data: vegetableData[]): void {
  const buttonGroup = document.querySelector(".button-group") as HTMLElement;
  for (let i = 0; i < buttonGroup.childElementCount; i++) {
    const button = buttonGroup.children[i] as HTMLElement;
    button.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      activeChange(buttonGroup, target);
      // 過濾資料
      const type = target.dataset.type;
      const filterData = data.filter((item) => item.種類代碼 == type);
      render(filterData);
    });
  }
}

/**按鈕 active 處理 */
function activeChange(buttonGroup: HTMLElement, target: HTMLElement): void {
  // 清除所有 active
  for (let i = 0; i < buttonGroup.childElementCount; i++) {
    const item = buttonGroup.children.item(i) as HTMLElement;
    item.classList.remove("active");
  }
  // 根據點擊新增 active
  target.classList.add("active");
}

export { addFilterEvent };
