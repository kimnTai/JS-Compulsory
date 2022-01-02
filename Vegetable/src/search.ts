import render from "./render";

/**搜尋 */
export function addSearchEvent(data: vegetableData[]): void {
  const search = document.querySelector(".search") as HTMLButtonElement;
  search.addEventListener("click", () => {
    const input = document.querySelector(".rounded-end") as HTMLInputElement;
    if (input.value.trim() == "") {
      alert("請輸入作物名稱！");
      return;
    }
    const searchData = data.filter((item) => {
      if (item.作物名稱) {
        return item.作物名稱.match(input.value);
      }
    });
    if (searchData.length > 0) {
      const cropName = document.querySelector("#js-crop-name") as HTMLElement;
      console.log(cropName);
      cropName.innerText = `查看「${input.value}」的比價結果`;
      render(searchData);
    } else {
      const showList = document.querySelector(".showList") as HTMLElement;
      showList.innerHTML = `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>`;
    }
  });
}
