let data = [
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: 100,
        child: [
          {
            id: 11,
            name: 110,
            child: [
              {
                id: 111,
                name: 111,
                child: [
                  {
                    id: 1111,
                    name: 111.1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: 100,
        child: [
          {
            id: 11,
            name: 110,
            child: [
              {
                id: 111,
                name: 111,
                child: [
                  {
                    id: 1111,
                    name: 111.1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: 100,
        child: [
          {
            id: 11,
            name: 110,
            child: [
              {
                id: 111,
                name: 111,
                child: [
                  {
                    id: 1111,
                    name: 111.1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 100,
    child: [
      {
        id: 11,
        name: 110,
        child: [
          {
            id: 111,
            name: 111,
            child: [
              {
                id: 1111,
                name: 111.1,
              },
            ],
          },
        ],
      },
    ],
  },
];

var html = "";

const genrate = (input) => {
  if (input) {
    html += "<ul>";
    input.map((el, index) => {
      html += "<li>" + el.name;
      if (el.child) genrate(el.child);
      html += "</li>";
    });
    html += "</ul>";
  }
};

const appendChild = (input, doc = null) => {
  doc = document.createElement("ul", { text: "expanding-list" });
  input.map((el, index) => {
    let li = Object.assign(document.createElement("li"), {
      textContent: el.name,
    });
    if (el.child) li.appendChild(appendChild(el.child, li));
    doc.appendChild(li);
  });
  return doc;
};

document.getElementById("list").append(appendChild(data));