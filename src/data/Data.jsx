const tableData = {
  tabs: [
    {
      title: "Tab 1",
      quantity: 5,
      checked: true,
    },
    {
      title: "Tab 2",
      quantity: 10,
      checked: false,
    },
  ],
  tableInfo: {
    columns: [
      {
        header: "Nome",
        ref: "name",
        alignment: "left",
        ordering: true,
      },
      {
        header: "Idade",
        ref: "age",
        alignment: "center",
        ordering: false,
      },
      {
        header: "Localização",
        ref: "location",
        alignment: "right",
        ordering: true,
      },
    ],
    items: [
      {
        id: 1,
        name: "João",
        age: 25,
        location: "São Paulo",
        variations: [
          {
            id: 101,
            color: "Azul",
            size: "M",
          },
        ],
      },
      {
        id: 2,
        name: "Maria",
        age: 30,
        location: "Rio de Janeiro",
        variations: [
          {
            id: 102,
            color: "Vermelho",
            size: "L",
          },
          {
            id: 103,
            color: "Preto",
            size: "M",
          },
        ],
      },
    ],
  },
};

export default tableData;
