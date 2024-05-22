import express from 'express'
import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite:expenses.db');
const server = express();
const port = 3001;

const Expenses = sequelize.define('expenses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    amount: {
        type: DataTypes.REAL,
        allowNull: false
    }
});
server.get('/data', async (req,res) =>{
    const despesas = await Expenses.findAll({
        attributes: ['id','date','category','amount']
    });
    // console.log(JSON.stringify(despesas));
    res.send(JSON.stringify(despesas));
    // res.send(despesas).json();
});
server.get('/',(req,res) =>{
    res.send('hello')
});

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

const sincronizarTabelas = async () => { await database.sync()};

export const adicionarDespesas = async (data,categoria, valor) => {
    try{
        Expenses.create({
            date: data,
            category: categoria,
            amount: valor
        });
        console.log('despesa adicionada com sucesso!');
    }catch(err){
        console.log(`erro ao adicionar despesa. erro: ${err}`)
    }
}

export const consultarDespesas = async () => {
    const despesas = await Expenses.findAll({
        attributes: ['id','date','category','amount']
    });
    console.log(JSON.stringify(despesas));
    return JSON.stringify(despesas);
}

// adicionarDespesas('20/05/2024','rebeka',100.58);
// console.log(await consultarDespesas());