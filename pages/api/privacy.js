const privacy = {
  "we never ask for your any data": true,
};

export default function handler(req, res) {
  res.status(200).json(privacy);
}
