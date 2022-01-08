import { addFilterEvent } from "./filter";
import { addSearchEvent } from "./search";
import { addSelectEvent, addSortEvent } from "./selector";
import axios from "axios";

let data: vegetableData[] = [];
async function init(): Promise<void> {
  const url = "https://hexschool.github.io/js-filter-data/data.json";
  const apiData: vegetableData[] = (await axios.get(url)).data;
  apiData.forEach((item) => {
    switch (item.作物名稱) {
      case null:
        return;
      case "null":
        return;
      case "":
        return;
      default:
        data.push(item);
    }
  });
  addFilterEvent(data);
  addSearchEvent(data);
  addSelectEvent(data);
  addSortEvent(data);
}
init();
