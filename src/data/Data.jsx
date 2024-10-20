const tableData = {
  tabs: [
    {
      title: "Primeira",
      quantity: 5,
      checked: true,
      special: true,
    },
    {
      title: "Segunda",
      quantity: 10,
      checked: true,
      special: false,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
