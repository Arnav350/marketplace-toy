import Item from "../components/Item";

const items = [
  {
    title: "GE Minifridge",
    image: 247,
    price: 80,
    category: "Electronics",
  },
  {
    title: "Sofa",
    image: 246,
    price: 260,
    category: "Furniture",
  },
  {
    title: "LED Desk Lamp",
    image: 245,
    price: 28,
    category: "Room decor",
  },
];

const categories = [
  "Electronics",
  "Room decor",
  "Furniture",
  "School supplies",
  "Cooking",
  "Bath products",
  "Cleaning",
];

function Home() {
  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <h2 style={{ fontSize: 36, padding: 16, fontWeight: "400" }}>Welcome back, Arnav</h2>
      <h4 style={{ fontSize: 18, paddingLeft: 16, fontWeight: "400" }}>Recommended</h4>
      <div style={{ display: "flex", gap: 16, margin: 16, overflowX: "scroll" }}>
        {items.map(({ title, image, price, category }, i) => (
          <Item key={i} title={title} image={image} price={price} category={category} />
        ))}
      </div>
      <h4 style={{ fontSize: 18, paddingLeft: 16, fontWeight: "400" }}>Popular Categories</h4>
      <div style={{ display: "flex", margin: 16, gap: 8, overflowX: "scroll" }}>
        {categories.map((category, i) => (
          <button key={i} style={{ backgroundColor: "#69afdc", padding: 8, borderRadius: 8, color: "white" }}>
            {category}
          </button>
        ))}
      </div>
      <h4 style={{ fontSize: 18, paddingLeft: 16, fontWeight: "400" }}>Recently Viewed</h4>
      <div style={{ margin: 16 }}>
        <Item title="Sofa" image={246} price={260} category="Furniture" />
      </div>
      <h4 style={{ fontSize: 18, paddingLeft: 16, fontWeight: "400" }}>Annoucements</h4>
      <div style={{ margin: 16, padding: 16, backgroundColor: "#ddd", borderRadius: 8 }}>
        <p>If you would like to collaborate or pre-register reach out to patelarnavm@gmail.com!</p>
      </div>
      <div style={{ margin: 16, padding: 16, backgroundColor: "#ddd", borderRadius: 8 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio quos architecto labore animi tempora
          consequatur eum aperiam dolor quis, placeat quisquam perferendis iure perspiciatis veritatis eius? Ipsam,
          laboriosam omnis.
        </p>
      </div>
    </div>
  );
}

export default Home;
