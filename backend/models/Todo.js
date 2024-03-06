import db from '../config/database.js';

export async function getAllTodosFromDb() {
    try {
        const result = await db.query('SELECT * FROM todos');
        return result.rows;
    } catch(err) {
        throw new Error(err);
    }
}