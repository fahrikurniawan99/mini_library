class Table {
  constructor(table) {
    this.columns = table.columns;
    this.data = table.data;
    this.classTable = `w-100 table table-bordered`;
  }

  createTh(columns) {
    let th = "";
    columns.forEach((e) => (th += `<th>${e}</th>`));
    return th;
  }

  createTd(data) {
    let td = "";
    data.forEach((e) => (td += `<td>${e[0]}</td><td>${e[1]}</td></tr>`));
    return td;
  }

  createTabel() {
    const table = `<table class="${this.classTable}">
    <thead class="table-primary">
        <tr>
            ${this.createTh(this.columns)}
        </tr>
    </thead>
    <tbody>
            ${this.createTd(this.data)}
    </tbody>
    </table>`;
    return table;
  }

  render(target) {
    target.innerHTML = this.createTabel();
  }
}

const table = new Table({
  columns: ["Nama", "Email"],
  data: [
    ["Mike", "mike@gmail.com"],
    ["Fahri", "fahri@gmail.com"],
    ["Abdul", "Abdul@gmail.com"],
  ],
});

table.render(document.getElementById("app"));
