/**畫面渲染 */
export default function render(data: vegetableData[]): void {
  const showList = document.querySelector(".showList") as HTMLElement;
  let str = "";
  data.forEach((item) => {
    str += `<tr>
         <td class='fw-bolder'>${item.作物名稱}</td>
         <td class='fw-bolder'>${item.市場代號}</td>
         <td>${item.上價}</td>
         <td>${item.中價}</td>
         <td>${item.下價}</td>
         <td>${item.平均價}</td>
         <td>${item.交易量}</td>
      </tr>`;
  });
  showList.innerHTML = str;
}
