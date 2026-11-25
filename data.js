// ============================================================
// data.js — ALL the fake data for your prototype lives here.
//
// There is no database. Everything below is made up, and that is
// on purpose: never put real people's names, emails, phone numbers
// or addresses in this file.
//
// To change what appears on the Explore page, edit LISTINGS.
// Each item is one card. Keep the same fields (id, name, category,
// description) or ask Copilot to add new ones everywhere they're needed.
// ============================================================

const STARTUP = {
  name: "SlopeSwap",
  tagline: "Buy and sell used ski gear with confidence.",
  pitch: "SlopeSwap connects skiers and snowboarders looking to sell or buy quality used equipment. We assess gear condition and arrange secure shipping and payment so both sides can make a simple, safe sale."
};

const MARKET_STATS = {
  activeSellers: 248,
  activeBuyers: 1842
};

const LISTINGS = [
  { id: 1, name: "All-Mountain Skis", category: "Skis", audience: "Men", price: 320, condition: "Good", image: "assets/skis.svg", description: "Used for two seasons. Bases and edges have been inspected and rated in good condition." },
  { id: 2, name: "Women's Snowboard", category: "Snowboards", audience: "Women", price: 275, condition: "Good", image: "assets/snowboard.svg", description: "A responsive intermediate snowboard with minor cosmetic scratches and solid edge condition." },
  { id: 3, name: "Ski Helmet", category: "Protection", audience: "Unisex", price: 65, condition: "Excellent", image: "assets/protection.svg", description: "Lightweight helmet with adjustable fit. Cleaned and checked for cracks or impact damage." },
  { id: 4, name: "Touring Ski Boots", category: "Boots", audience: "Men", price: 210, condition: "Excellent", image: "assets/touring-ski-boots.svg", description: "Flexible all-day touring boots in excellent condition, with liners in good shape." },
  { id: 5, name: "Youth Ski Set", category: "Skis", audience: "Kids", price: 180, condition: "Good", image: "assets/youth-ski-set.svg", description: "A complete set of youth skis and bindings, inspected for size, wear and safe binding function." },
  { id: 6, name: "Snowboard Boots", category: "Boots", audience: "Women", price: 95, condition: "Fair", image: "assets/snowboard-boots.svg", description: "Comfortable boots with moderate use. Closures and soles are checked and ready for resale." },
  { id: 7, name: "Used Freestyle Ski Package", category: "Skis", audience: "Kids", price: 145, condition: "Good", image: "assets/skis.svg", description: "Compact freestyle skis with bindings and moderate base wear. Edges are intact and ready for youth riders." },
  { id: 8, name: "Women's Freeride Snowboard", category: "Snowboards", audience: "Women", price: 240, condition: "Excellent", image: "assets/snowboard.svg", description: "A stable freeride board used for one season. Topsheet and base have been checked for deep damage." },
  { id: 9, name: "Insulated Ski Goggles", category: "Accessories", audience: "Unisex", price: 55, condition: "Good", image: "assets/ski-goggles.svg", description: "Anti-fog goggles with a clean adjustable strap and no visible lens scratches." },
  { id: 10, name: "Youth Snowboard Package", category: "Snowboards", audience: "Kids", price: 165, condition: "Good", image: "assets/snowboard.svg", description: "Youth snowboard with soft bindings and a worn cosmetic topsheet. Mounts and base are in good shape." },
  { id: 11, name: "Men's Park Snowboard Boots", category: "Boots", audience: "Men", price: 120, condition: "Fair", image: "assets/snowboard-boots.svg", description: "Flexible park boots with moderate sole wear. Laces and footbeds are intact and fully functional." },
  { id: 12, name: "Adjustable Ski Poles", category: "Accessories", audience: "Men", price: 40, condition: "Excellent", image: "assets/ski-poles.svg", description: "Lightweight adjustable poles with secure baskets and grips. No bends or cracks found." },
  { id: 13, name: "Women's Carving Skis", category: "Skis", audience: "Women", price: 195, condition: "Good", image: "assets/skis.svg", description: "Easy-turning skis used for two winters. Bases have light scratches and edges are in serviceable condition." },
  { id: 14, name: "All-Mountain Snowboard", category: "Snowboards", audience: "Men", price: 230, condition: "Good", image: "assets/snowboard.svg", description: "Versatile board with normal surface scuffs from regular use. Base and binding inserts have been checked." },
  { id: 15, name: "Junior Ski Boots", category: "Boots", audience: "Kids", price: 70, condition: "Good", image: "assets/junior-ski-boots.svg", description: "Youth boots with lightly used liners, working buckles and intact soles. See sizing details in the listing." },
  { id: 16, name: "Adult Snowboard Helmet", category: "Protection", audience: "Unisex", price: 50, condition: "Excellent", image: "assets/protection.svg", description: "Adjustable helmet with clean padding and no visible cracks. Seller reports no known impacts." },
  { id: 17, name: "Ski Goggle and Glove Set", category: "Accessories", audience: "Women", price: 45, condition: "Fair", image: "assets/goggles-gloves.svg", description: "Used goggle and glove set. Goggles have minor lens marks; gloves show wear at the fingertips." },
  { id: 18, name: "Kids' Snowboard Boots", category: "Boots", audience: "Kids", price: 60, condition: "Good", image: "assets/kids-snowboard-boots.svg", description: "Youth snowboard boots with intact liners and working closures. Moderate cosmetic wear from one season." }
];
