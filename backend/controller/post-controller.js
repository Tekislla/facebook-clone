import { Users, Post } from '../model/models.js';

export const getPostsWithUser = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{
        model: Users,
        attributes: ['name']
      }],
      raw: true
    });

    res.json(posts);
  } catch (error) {
    console.error('Erro ao obter os posts com os nomes de usuário:', error);
    res.status(500).json({ error: 'Erro ao obter os posts com os nomes de usuário' });
  }
}
