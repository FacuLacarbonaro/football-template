
const Brands = [
  {
    id: 1,
    name: "Nike",
    imgURL:
      "https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_Nike_White.svg",
  },
  {
    id: 2,
    name: "Nike",
    imgURL:
      "https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_AXA_White.svg",
  },
  {
    id: 3,
    name: "Nike",
    imgURL:
      "https://backend.liverpoolfc.com/sites/default/files/2021-06/2021-22_SCB_White.svg",
  },
];

const BrandFooterRow = () => {
  return (
    <div className="bg-red-900 py-14">
      <div className=" flex justify-around items-center">
        {Brands.map((brand) => {
          return (
            <div key={brand.id}>
              <img
                src={brand.imgURL}
                alt={brand.name}
                className="h-[80px] w-[140px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandFooterRow;
