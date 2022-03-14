const contactInfo = {
  name: "ming-der wang",
  phone: "+886-968860662",
  email: "mingderwang@gmail.com",
};

export default function handler(req, res) {
  res.status(200).json(contactInfo);
}
