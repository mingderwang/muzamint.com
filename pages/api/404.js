const notFound = {
  "not found": 404,
};

export default function handler(req, res) {
  res.status(200).json(notFound);
}
