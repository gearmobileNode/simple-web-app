import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFileName = join(__dirname, 'data', 'todos.json');

async function loadList() {
  const rawData = await readFile(dataFileName, 'utf-8');
  return JSON.parse(rawData).todos;
}

async function loadItemList(id) {
  const rawData = await readFile(dataFileName, 'utf-8');
  const data = JSON.parse(rawData);

  return data.todos.find((todo) => todo.id === id);
}

export { loadList, loadItemList };
