const products = [
  {
    _id: "9b76pc6hjz0l7xcqgj08318",
    Name: "Antero Mdstream Partners LP",
    Qty: 100,
    Price: "$8015.08",
  },
  {
    _id: "1l31nu6mxo2v2gyftv05290",
    Name: "CVR Partners, LP",
    Qty: 8,
    Price: "$6448.32",
  },
  {
    _id: "7g32lr4mpp4h4gvtik11788",
    Name: "Mercer International Inc.",
    Qty: 34,
    Price: "$9208.28",
  },
  {
    _id: "9c90ci7gkx3i2lvdcz42919",
    Name: "Becton, Dickinson and Company",
    Qty: 40,
    Price: "$7239.47",
  },
  {
    _id: "0p19eu5yll1w1fzpek91856",
    Name: "Public Storage",
    Qty: 79,
    Price: "$516.09",
  },
  {
    _id: "4w94xz4krf9u6jmxzi02722",
    Name: "Luna Innovations Incorporated",
    Qty: 25,
    Price: "$3358.86",
  },
  {
    _id: "7a95uv1xkm0o6nsbyb52531",
    Name: "Madison Strategic Sector Premium Fund",
    Qty: 26,
    Price: "$237.27",
  },
  {
    _id: "0e16ww0rfl8u0scmpl16723",
    Name: "Independence Contract Drilling, Inc.",
    Qty: 29,
    Price: "$7658.63",
  },
  {
    _id: "5p76kh6ddw7a1kilmz98645",
    Name: "NextEra Energy Partners, LP",
    Qty: 91,
    Price: "$7251.99",
  },
  {
    _id: "4d76ox3npl1e8dmonn96788",
    Name: "Jumei International Holding Limited",
    Qty: 87,
    Price: "$7420.37",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((m) => m._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find((m) => m._id === product._id) || {};
  productInDb.Name = product.Name;
  productInDb.Qty = product.Qty;
  productInDb.Price = product.Price;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find((m) => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
