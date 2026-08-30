require("dotenv").config();
 
const conectar = require("./src/database/database");
const Produto = require("./src/models/Produtos");
const Usuario = require("./src/models/Usuarios");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
 
async function seed() {

await conectar.conectar();
  console.log("MongoDB conectado — populando dados...");
 
  await Produto.deleteMany({});
  await Usuario.deleteMany({});
 
  await Produto.insertMany([
    {
      nome: "Mochila Fjallraven Foldsack No. 1",
      preco: 109.95,
      descricao: "Sua mochila perfeita para o dia a dia e viagens.",
      categoria: "masculino",
      imagem: "https://acdn-us.mitiendanube.com/stores/001/374/022/products/7392158958184_ss18_a_foldsack_no1_21-fe1ce956680dbda28617682375381265-1024-1024.webp?w=1920",
      avaliacao: { nota: 3.9, quantidade: 120 },
    },
    {
      nome: "Camiseta Casual Premium",
      preco: 22.3,
      descricao: "Camiseta de algodão com estilo casual.",
      categoria: "masculino",
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRocrFhqeEnf9-uT_BVXNq5BXd0f91oX9C3LucDjW2MladBvvzWnkJadhLYtz41Tvd8bTy0Ii3U--zF1yO9XOaYsnDNeXfBtawPK9ZPZ1CFQlXW9QESFvYIfqXnIbk9mJADDCqXMg&usqp=CAc",
      avaliacao: { nota: 4.1, quantidade: 259 },
    },
    {
      nome: "Jaqueta de Inverno Masculina",
      preco: 55.99,
      descricao: "Jaqueta quente e estilosa para o inverno.",
      categoria: "masculino",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozUwGoFvPlFOFDgx9KqTaJVcm_2zaPnLKLQW0ox4_mA&s=10",
      avaliacao: { nota: 4.7, quantidade: 500 },
    },
    {
      nome: "Vestido Feminino Floral",
      preco: 29.95,
      descricao: "Vestido leve e confortável para o verão.",
      categoria: "feminino",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlzeBF-ZJ8F__ufwLoRKmfLQf8D5ROTjivHXvrjSpnw&s=10",
      avaliacao: { nota: 3.8, quantidade: 240 },
    },
    {
      nome: "Bolsa Feminina de Couro",
      preco: 89.99,
      descricao: "Bolsa elegante em couro legítimo.",
      categoria: "feminino",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5j7f_IBRCd3ZdRM8bXoGU8uv-NgalaWASEen3PZiroQ&s=10",
      avaliacao: { nota: 4.2, quantidade: 180 },
    },
    {
      nome: "Relógio Digital Esportivo",
      preco: 49.99,
      descricao: "Relógio resistente à água com cronômetro.",
      categoria: "eletronicos",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTqKohgOogRQdCuCKIA0mtyx1MpQgfxmjM84UEFxmRg&s=10",
      avaliacao: { nota: 4.5, quantidade: 320 },
    },
    {
      nome: "Fone de Ouvido Bluetooth",
      preco: 79.99,
      descricao: "Fone sem fio com cancelamento de ruído.",
      categoria: "eletronicos",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68Xwl_kw_bWsFUD-3N2ETFDOf2b9qAj-EHhgd_WO3fw&s=10",
      avaliacao: { nota: 4.3, quantidade: 410 },
    },
    {
      nome: "Anel de Prata 925",
      preco: 15.99,
      descricao: "Anel elegante em prata 925.",
      categoria: "joias",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpXp21JFMaUGZRMk9GBCK0-IpL9V7CBrLDLUjWzK-DQ&s=10",
      avaliacao: { nota: 3.9, quantidade: 70 },
    },
  ]);
 
  console.log("8 produtos inseridos!");
 
  const senhaHash = await bcrypt.hash("admin123", 10);
 
  await Usuario.create({
    nome: "Admin",
    email: "admin@email.com",
    senha: senhaHash,
    role: "admin",
  });
  await Usuario.create({
    nome: "Usuário Teste",
    email: "usuario@email.com",
    senha: senhaHash,
    role: "user",
  });
 
  console.log("Usuários criados!");
  console.log("Admin: admin@email.com / senha: admin123");
  console.log("User:  usuario@email.com / senha: admin123");
  console.log("Banco populado com sucesso!");
 
  await mongoose.disconnect();
}
 
seed().catch((erro) => {
  console.error("Erro ao popular banco:", erro);
  process.exit(1);
});