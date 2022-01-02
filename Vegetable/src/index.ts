import axios from "axios";
import { addFilterEvent } from "./filter";
import { addSearchEvent } from "./search";
import { addSelectEvent, addSortEvent } from "./selector";

let data: vegetableData[] = [];
async function init(): Promise<void> {
  const url = "https://hexschool.github.io/js-filter-data/data.json";
  data = (await axios.get(url)).data;
  addFilterEvent(data);
  addSearchEvent(data);
  addSelectEvent(data);
  addSortEvent(data);
}
init();
