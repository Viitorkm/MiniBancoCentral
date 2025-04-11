import { Router } from "express";
import User from "../app/models/User.js";
const router = Router();

router.get("/hello", async (req, res) => {
  const user = await User.create({
    name: "Vitor",
    cpf: "03943559033",
  });
  return res.json(user);
});

//router.post("/instituicoes"); // Cadastrar instituições financeiras

//router.post("/usuarios/:id/contas"); // Cadastrar contas para usuários em instituições diferentes

//router.post("/usuarios/:id/transacoes"); //Realizar lançamentos (transações) nas contas

//router.get("/usuarios/:id/saldo"); // Obter saldo total do usuário

//router.get("/usuarios/:id/saldo?instituicao=instituicao"); //Obter saldo por instituição

//router.get("/usuarios/:id/extrato"); //Obter extrato completo do usuário

//router.get("/usuarios/:id/extrato?instituicao=BB"); //Filtrar extrato por instituição

export default router;
