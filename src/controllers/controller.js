import { loadList, loadItemList } from '../model/model.js';

async function mainPage(res) {
  let s =
    '<!doctype html>' +
    '<html>' +
    ' <head>' +
    '<meta charset="UTF-8">' +
    '<title>Список запланированные дела</title>';

  const todos = loadList();
  console.log(todos);
  for (const todo of todos) {
    s +=
      `<h2><a href="/${todo._id}/">${todo.title}</a></h2>` +
      `<p>${todo.desc}</p>` +
      '<p>&nbsp;</p>';
  }

  s += ' </body>' + '</html>';

  res.end(s);
}

async function detailPage(res, id) {
  const todo = loadItemList(id);

  if (!todo) {
    errorPage(res);
    return;
  }

  res.end(
    '<!doctype html>' +
      '<html>' +
      ' <head>' +
      ' <meta charset="UTF-8">' +
      ` <title>${todo.title} :: Список запланированных дел</title>` +
      ' </head>' +
      ' <body>' +
      ` <h1>${todo.title}</h1>` +
      `<p>${todo.desc}</p>` +
      ' </body>' +
      '</html>',
  );
}

function errorPage(res) {
  res.statusCode = 404;

  res.end(
    '<!doctype html>' +
      '<html>' +
      ' <head>' +
      ' <meta charset="UTF-8">' +
      ' <title>Ошибка</title>' +
      ' </head>' +
      ' <body>' +
      ' <h1>Ошибка!</h1>' +
      ' <p>Запрошенная страница не существует.</p>' +
      ' </body>' +
      '</html>',
  );
}

export { mainPage, detailPage, errorPage };
