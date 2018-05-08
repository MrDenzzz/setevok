<template>
  <div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
    <div>
      <div>
      <form>
        <div style="display: flex; flex-direction: column; margin: 30px">
          <label for="file">Добавьте сюда данные для нового заказа(таблица с кинотеатрами и их городами)</label>
          <!--<input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change">-->
          <div>
            <label for="files">Загрузить таблицу</label>
          </div>
          <input id="files" style="visibility:hidden;" type="file" class="form-control" :accept="SheetJSFT" @change="_change">
        </div>
      </form>
    </div>
    </div>
    <div><div>
      <button :disabled="data.length ? false : true" @click="_export">Скачать таблицу</button>
    </div></div>
    <div><div>
      <div>
        <table>
          <thead><tr>
            <th v-for="c in cols" :key="c.key">{{c.name}}</th>
          </tr></thead>
          <tbody>
          <tr v-for="(r, key) in data" :key="key">
            <td v-for="c in cols" :key="c.key"> {{ r[c.key] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div></div>
  </div>
</template>

<script>
  import XLSX from 'xlsx';

  const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
  const _SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
  ].map(function(x) { return "." + x; }).join(",");
  export default {
    name:"Table",
    // components: {
    //   XSLS
    // },
    data() {
      return {
        data: ["XlsX".split(""), "File".split("")],
        cols: [
          {name:"P", key:0},
          {name:"U", key:1},
          {name:"T", key:2},
          {name:"H", key:3},
          {name:"E", key:4},
          {name:"R", key:5},
          {name:"E", key:6},
        ],
        SheetJSFT: _SheetJSFT
      }; },
    methods: {
      _suppress(evt) { evt.stopPropagation(); evt.preventDefault(); },
      _drop(evt) {
        evt.stopPropagation(); evt.preventDefault();
        const files = evt.dataTransfer.files;
        if(files && files[0]) this._file(files[0]);
      },
      _change(evt) {
        const files = evt.target.files;
        if(files && files[0]) this._file(files[0]);
      },
      _export(evt) {
        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(this.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx");
      },
      _file(file) {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        reader.onload = (e) => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, {type:'binary'});
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, {header:1});
          /* Update state */
          this.data = data;
          this.cols = make_cols(ws['!ref']);
        };
        reader.readAsBinaryString(file);
      }
    }
  };
</script>

<style scoped>
  #btn {
    padding-left: 5px;
    font-size: 14px;
    border: 1px solid #333;
    background: #ccc;
    color: #161;
    width: 70px;
    height: 19px;
  }
</style>
