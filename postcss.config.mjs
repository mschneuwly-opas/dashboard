// Catalogue jantes Oceanie Pneus
// Chaque jante : référence, finition, diamètre, image HD (détourée si possible)

export const FINISHES = {
  "M.BLK": { label: "Noir mat", swatch: "#1c1c1c" },
  "G.BLK": { label: "Noir brillant", swatch: "#0a0a0a" },
  "M.GREY": { label: "Gunmetal", swatch: "#4a4d52" },
  "D.BRZ": { label: "Bronze", swatch: "#8a6a3a" },
  "SILVER": { label: "Silver", swatch: "#c7c9cc" },
  "MACHINED": { label: "Machined face", swatch: "#9aa0a6" },
};

export const PRODUCTS = [
  { sku: "DX022-17-1", name: "DX022", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "8J", et: "+0", images: ["https://i.spread.name/1f427f37-bdda-491c-b84a-3fef57c79b72_DX022-17-1.png", "https://i.spread.name/59604fc5-4cf2-4ec5-a726-d6084c689b4b_Diapositive2.JPG"], stock: 4 },
  { sku: "DX023-17-1", name: "DX023", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "8J", et: "+0", images: ["https://i.spread.name/a200c4fc-7afe-456e-8dc6-815dffb705c4_KF44-16BLK.png", "https://i.spread.name/f4685fe7-dc96-48b0-9e29-f93d48368dff_Diapositive1.JPG"], stock: 4 },
  { sku: "DX025-17-1", name: "DX025", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "8J", et: "+0", images: ["https://i.spread.name/34307010-9cb8-4f0c-b07b-c0a844936830_DX025-17-1.png", "https://i.spread.name/ae7d85e1-a9d0-4495-aead-e729c11dd5aa_Diapositive3.JPG"], stock: 24 },
  { sku: "DX189-17-2", name: "DX189", brand: "OPAS", finish: "M.GREY", diameter: 17, width: "8J", et: "+0", images: ["https://i.spread.name/08613e3e-7b27-46f4-9454-d4df36542248_Diapositive1.JPG"], stock: 24 },
  { sku: "DX205-17-2", name: "DX205", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "8J", et: "+0", images: ["https://i.spread.name/149eab7f-08f1-4682-9472-637713d0748c_DX205-17-2.png", "https://i.spread.name/a56c491e-daf1-40d1-9677-99c1a54845b9_Diapositive7.JPG"], stock: 8 },
  { sku: "JT257-7", name: "JT257-7", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "9J", et: "+0", images: ["https://i.spread.name/6ca0dede-04cb-40d1-986e-7eabcb128940_JT257-7.png", "https://i.spread.name/19016ab9-f30e-4134-b095-36163775dd27_Diapositive12.JPG"], stock: 8 },
  { sku: "KF15-17G", name: "KF15", brand: "OPAS", finish: "M.GREY", diameter: 17, width: "9J", et: "+0", images: ["https://i.spread.name/428473f3-4e1c-4d45-95dd-c1aa12e48e17_KF15-17G_MET_B_LIP.png", "https://i.spread.name/9ed7489b-f0e6-48d7-a7ac-bac417ddae8b_Diapositive1.JPG"], stock: 16 },
  { sku: "KF15-17D", name: "KF15", brand: "OPAS", finish: "D.BRZ", diameter: 17, width: "9J", et: "+10", images: ["https://i.spread.name/1b490ac1-3cc9-4cc2-bcce-c170a021ee7f_KF15-17D_BRZ.png", "https://i.spread.name/f924ce54-ab9c-47ca-9903-9ef8879beccf_Diapositive3.JPG"], stock: 16 },
  { sku: "KFR3198-17", name: "KFR3198", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "9J", et: "+0", images: ["https://i.spread.name/07796a5a-ff04-411b-bce9-5b14da352480_KFR3198-17MBLK.png", "https://i.spread.name/568126c0-d492-4257-bea0-5417c2e002f9_Diapositive1.JPG"], stock: 16 },
  { sku: "R227-BLK", name: "R227-7", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "9J", et: "+0", images: ["https://i.spread.name/384202e4-3e26-4940-9a55-42d01dcb2487_Diapositive25.JPG"], stock: 27 },
  { sku: "R227-RED", name: "R227.7", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "9J", et: "+0", images: ["https://i.spread.name/72a2732c-f718-45b8-9209-367ca6ccc2d7_Diapositive26.JPG"], stock: 20 },
  { sku: "2640", name: "2640", brand: "OPAS", finish: "G.BLK", diameter: 16, width: "8J", et: "+0", images: ["https://i.spread.name/f51027a8-1054-4ab9-ab99-e4dbf2693eba_2640.png", "https://i.spread.name/430c918f-9846-442f-bb7f-2aff6a3f6adb_Diapositive5.JPG"], stock: 4 },
  { sku: "KF44-16", name: "KF44", brand: "OPAS", finish: "M.BLK", diameter: 16, width: "8J", et: "+0", images: ["https://i.spread.name/0a049950-de8a-4414-8e78-257bcbfd46b1_KF44-16BLK.png", "https://i.spread.name/210fc60a-01d8-4488-b3c9-4e2980914536_Diapositive4.JPG"], stock: 8 },
  { sku: "R150-18", name: "R150", brand: "OPAS", finish: "MACHINED", diameter: 18, width: "9J", et: "+0", images: ["https://i.spread.name/c2a90598-3bf1-4cb4-90f5-57309b82d028_SHC1205-R150-18.png"], stock: 12 },
  { sku: "JT187-8", name: "JT187-8", brand: "OPAS", finish: "MACHINED", diameter: 18, width: "9J", et: "+0", images: ["https://i.spread.name/7bb5ae81-ba99-44fe-9f8b-23f4fd7d716c_JT187-8.png"], stock: 36 },
  { sku: "55191", name: "55191", brand: "OPAS", finish: "M.BLK", diameter: 17, width: "9J", et: "-12", images: ["https://i.spread.name/e7621c63-c0a4-42cd-9cee-6bbfa4e5e07a_55191.png", "https://i.spread.name/9ed7489b-f0e6-48d7-a7ac-bac417ddae8b_Diapositive1.JPG"], stock: 5 },
];

export const VEHICLES = [
  "Mazda BT-50", "Toyota Hilux", "Mitsubishi L200", "Isuzu D-Max",
  "Ford Ranger", "Mitsubishi Triton", "Hyundai Tasman", "Chevrolet Silverado",
];

export const DEVIS_URL = "https://webforms.pipedrive.com/f/6N0UIYI2RS2aKNZurIGr3NabrOG7HAORuPLE47FPrzZY7hLxDw1MeQtwhwCz9GPcHN";
