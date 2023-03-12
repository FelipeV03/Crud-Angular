const Router = require('express')
const router = Router();
const pool = require('../database');



// Rutas
// Listar todos los clientes
router.get('/', async (req, res) => {
    const sql = await pool.query('SELECT * FROM tb_clientes');
    // console.log(sql);
    res.json(sql);
});



router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const sql = await pool.query('SELECT * FROM tb_clientes WHERE id = ?', [id]);
    // console.log(sql);
    res.json(sql);
});



// Crear un nuevo cliente
router.post('/', (req, res) => {
    const new_user = { name, apellido, tel, avatar } = req.body;
    console.log(`File ${req.file}`);
    // const { filename, path, originalname, mimetype, size } = req.file;
    const user_new = pool.query('INSERT INTO tb_clientes SET ?', [new_user]);
    console.log(new_user);
    console.log(user_new);
    res.json({ message: 'Usuario creado' });
});



// Actualizar un cliente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, apellido, tel, } = req.body;
    console.log(req.file);
    const new_cliente = {
        name,
        apellido,
        tel,
    };
    const update_user = await pool.query('UPDATE tb_clientes SET ? WHERE id = ?', [new_cliente, id]);
    console.log(update_user);
    res.json({ message: 'Usuario actualizado' });
});



// Eliminar un cliente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const delete_user = await pool.query('DELETE FROM tb_clientes WHERE id = ?', [id]);
    console.log(delete_user);
    res.json({ message: 'Usuario eliminado' });
});

module.exports = router;