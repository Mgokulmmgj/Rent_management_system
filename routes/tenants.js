const express = require("express");
const router = express.Router();
const db = require("../db");

/* GET all tenants */
router.get("/", (req, res) => {
  db.query("SELECT * FROM tenants", (err, result) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(result);
  });
});

/* ADD tenant */
router.post("/", (req, res) => {
  const { name, room_no, rent, status } = req.body;

  db.query(
    "INSERT INTO tenants (name, room_no, rent, status) VALUES (?,?,?,?)",
    [name, room_no, rent, status],
    (err) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ message: "Tenant added successfully" });
    }
  );
});

/* DELETE tenant */
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM tenants WHERE id=?",
    [req.params.id],
    () => res.json({ message: "Tenant deleted" })
  );
});

module.exports = router;
