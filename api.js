const express = require('express');
const app = express();
const port = 9191;

let array = [
    { 
        id: 1, 
        name: 'Crêpes', 
        ingredients: ['Farine', 'Oeuf', 'Sel', 'Lait', 'Sucre', 'Beurre'], 
        recipe: 'ÉTAPE 1\nMélanger dans une casserole le sucre, la farine, la vanille avec le lait et ajouter une pincée de sel.\n\nÉTAPE 2\nFaire cuire en remuant jusqu\'à ce que la crème se détache de la spatule.\n\nÉTAPE 3\nOter du feu et laisser refroidir quelques minutes. Incorporer les jaunes d\'oeufs et bien mélanger.\n\nÉTAPE 4\nVerser dans les petits moules déjà garnis de la pâte feuilletée\n\nÉTAPE 5\net mettre au four, préalablement chauffé à 300° (th 9/10).\n\nÉTAPE 6\nSortir du four et saupoudrer de cannelle.\n\nÉTAPE 7\nDéguster'
    },
    { 
        id: 2, 
        name: 'Spaghetti carbonara', 
        ingredients: ['Spaghetti', 'Oeuf', 'Bacon', 'Parmesant', 'Basilic', 'Sel'],
        recipe: 'ÉTAPE 1\nPortez à ébullition un faitout d\'eau salée. Plongez-y les spaghetti et laissez-les cuire environ 12 min, jusqu\'à ce qu\'ils soient al dente.\n\nÉTAPE 2\nPendant la cuisson des spaghetti, faites revenir les lardons à sec dans une poêle, jusqu\'à ce qu\'ils soient bien dorés.\n\nÉTAPE 3\nBaissez le feu et incorporez la crème fraîche. Salez légèrement, poivrez généreusement et ajoutez les jaunes d\'oeufs, en fouettant pour qu\'ils ne cuisent pas.\n\nÉTAPE 4\nRectifiez l\'assaisonnement.\n\nÉTAPE 5\nEgouttez les pâtes. Versez-les dans la sauteuse, mélangez et transvasez dans un plat de service.\n\nÉTAPE 6\nServez en présentant le parmesan à part.'
    },
    { 
        id: 3, 
        name: 'Quiche lorraine', 
        ingredients: ['Pâte brisée', 'Lardon', 'Beurre', 'Crème fraîche', 'Lait', 'Sel', 'Poivre'],
        recipe: 'ÉTAPE 1\nPréchauffer le four à 180°C (thermostat 6). Etaler la pâte dans un moule.\n\nÉTAPE 2\nla piquer à la fourchette. Parsemer de copeaux de beurre.\n\nÉTAPE 3\nFaire rissoler les lardons à la poêle puis les éponger avec une feuille d\'essuie-tout.\n\nÉTAPE 4\nBattre les oeufs, la crème fraîche et le lait.\n\nÉTAPE 5\nAjouter les lardons.\n\nÉTAPE 6\nAssaisonner de sel, de poivre et de muscade.\n\nÉTAPE 7\nCuire 45 à 50 min.\n\nÉTAPE 8\nDéguster.'
    },
    { 
        id: 4, 
        name: 'Bruschetta', 
        ingredients: ['Tomates', 'Huile d\'olive', 'Sel', 'Pain', 'Ail'],
        recipe: 'ÉTAPE 1\nDécouper les tomates en petits dés après avoir retiré la partie verte en haut, les mettre dans un petit saladier avec une bonne huile d\'olive et du sel.\n\nÉTAPE 2\nFaire griller les tranches de pain de campagne, puis les frotter d\'ail.\n\nÉTAPE 3\nDisposer le mélange tomate/huile d\'olive généreusement sur la tartine, à déguster aussitôt (tiède).\n\n'
    },
    { 
        id: 5, 
        name: 'Pastéis de nata', 
        ingredients: ['Sucre', 'Farine', 'Sel', 'Pâte feuilletée', 'Oeuf', 'Lait'],
        recipe: 'ÉTAPE 1\nMélanger dans une casserole le sucre, la farine, la vanille avec le lait et ajouter une pincée de sel.\n\nÉTAPE 2\nFaire cuire en remuant jusqu\'à ce que la crème se détache de la spatule.\n\nÉTAPE 3\nOter du feu et laisser refroidir quelques minutes. Incorporer les jaunes d\'oeufs et bien mélanger.\n\nÉTAPE 4\nVerser dans les petits moules déjà garnis de la pâte feuilletée.\n\nÉTAPE 5\nMettre au four, préalablement chauffé à 300° (th 9/10).\n\nÉTAPE 6\nSortir du four et saupoudrer de cannelle.\n\nÉTAPE 7\nDéguster.'
    },
];

app.get('/', (req, res) => {
  res.json(array);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
