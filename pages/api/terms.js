const terms = { "use on your own risk": true, "but, we never harm you": true };

export default function handler(req, res) {
  res.status(200).json(terms);
}
