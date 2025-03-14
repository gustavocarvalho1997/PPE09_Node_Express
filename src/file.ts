import { readFile, unlink, writeFile } from 'node:fs/promises';

const exec = async () => {
    const list: string[] = ['Clarice', 'João', 'Maria', 'José'];
    const fileList: string = list.join('\n');

    await writeFile('./list.txt', fileList);

    const data = await readFile('./list.txt', 'utf-8');
    const listFromFile = data.split('\n');
    console.log(listFromFile);
};

const update = async () => {
    const data = await readFile('./list.txt', 'utf-8');
    const listFromFile = data.split('\n');
    listFromFile.push('Adriano');
    const fileList = listFromFile.join('\n');
    await writeFile('./list.txt', fileList);
};

const del = async () => {
    await unlink('./list.txt');
};

// exec();
// update();
// del();
