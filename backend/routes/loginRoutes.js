import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  res.json({ message: "Login" });
});
router.get("/logout", (req, res) => {
    res.json({ message: "Logout" });
});

export default router;
